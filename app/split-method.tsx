import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Pressable, TextInput, View } from 'react-native';

const SPLIT_METHODS = ['Equal', 'Percentage', 'Exact'] as const;
type SplitMethod = typeof SPLIT_METHODS[number];

type User = { id: string; name: string; phone?: string };

export default function SplitMethodScreen() {
  const { description, amount, date, users } = useLocalSearchParams();
  const router = useRouter();
  const userList: User[] = users ? JSON.parse(users as string) : [];
  const total = parseFloat(amount as string);
  const [method, setMethod] = useState<SplitMethod>('Equal');
  const [splits, setSplits] = useState<number[]>(userList.map(() => 0));

  React.useEffect(() => {
    if (method === 'Equal') {
      const perUser = Math.round((total / userList.length) * 100) / 100;
      setSplits(userList.map(() => perUser));
    } else if (method === 'Percentage') {
      setSplits(userList.map(() => 0));
    } else if (method === 'Exact') {
      setSplits(userList.map(() => 0));
    }
  }, [method, total, userList.length]);

  const handleSplitChange = (idx: number, value: string) => {
    const newSplits = [...splits];
    newSplits[idx] = parseFloat(value) || 0;
    setSplits(newSplits);
  };

  const isValid = () => {
    if (method === 'Equal') return true;
    if (method === 'Percentage') {
      const sum = splits.reduce((a, b) => a + b, 0);
      return Math.abs(sum - 100) < 0.01;
    }
    if (method === 'Exact') {
      const sum = splits.reduce((a, b) => a + b, 0);
      return Math.abs(sum - total) < 0.01;
    }
    return false;
  };

  const getFinalSplits = () => {
    if (method === 'Equal') return userList.map((u, i) => ({ ...u, amount: splits[i] }));
    if (method === 'Percentage') return userList.map((u, i) => ({ ...u, amount: Math.round((splits[i] / 100) * total * 100) / 100 }));
    if (method === 'Exact') return userList.map((u, i) => ({ ...u, amount: splits[i] }));
    return [];
  };

  return (
    <ThemedView style={{ flex: 1, padding: 24, backgroundColor: '#18181b' }}>
      <ThemedText type="title" style={{ marginBottom: 16, color: '#fff' }}>Split Method</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Description: {description as string}</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Amount: {amount as string}</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Date: {date ? new Date(date as string).toDateString() : ''}</ThemedText>
      <View style={{ flexDirection: 'row', marginVertical: 16 }}>
        {SPLIT_METHODS.map(m => (
          <Pressable
            key={m}
            onPress={() => setMethod(m)}
            style={{
              backgroundColor: method === m ? '#0a7ea4' : '#23232a',
              padding: 12,
              borderRadius: 8,
              marginRight: 8,
            }}
          >
            <ThemedText style={{ color: method === m ? '#fff' : '#aaa' }}>{m}</ThemedText>
          </Pressable>
        ))}
      </View>
      <FlatList
        data={userList}
        keyExtractor={u => u.id}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12, backgroundColor: '#23232a', borderRadius: 8, padding: 8 }}>
            <ThemedText style={{ flex: 1, color: '#fff' }}>{item.name}</ThemedText>
            {method === 'Equal' ? (
              <ThemedText style={{ width: 80, textAlign: 'right', color: '#fff' }}>{splits[index].toFixed(2)}</ThemedText>
            ) : (
              <TextInput
                value={splits[index] ? String(splits[index]) : ''}
                onChangeText={v => handleSplitChange(index, v)}
                placeholder={method === 'Percentage' ? '% share' : 'Amount'}
                placeholderTextColor="#aaa"
                keyboardType="decimal-pad"
                style={{
                  borderWidth: 1,
                  borderColor: '#333',
                  borderRadius: 8,
                  padding: 8,
                  width: 80,
                  textAlign: 'right',
                  fontFamily: 'PTSans_400Regular',
                  backgroundColor: '#23232a',
                  color: '#fff',
                }}
              />
            )}
          </View>
        )}
      />
      <Pressable
        onPress={() => {
          if (isValid()) {
            router.push({
              pathname: '/settlement-summary',
              params: {
                description,
                amount,
                date,
                splits: JSON.stringify(getFinalSplits()),
                method,
              },
            });
          }
        }}
        style={{
          backgroundColor: isValid() ? '#0a7ea4' : '#ccc',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 16,
        }}
        disabled={!isValid()}
      >
        <ThemedText style={{ color: '#fff', fontWeight: 'bold' }}>See Summary</ThemedText>
      </Pressable>
    </ThemedView>
  );
} 