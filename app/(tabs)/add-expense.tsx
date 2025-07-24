import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Platform, Pressable, TextInput } from 'react-native';

export default function AddExpenseScreen() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const router = useRouter();

  const isValid = description.trim() && parseFloat(amount) > 0;

  return (
    <ThemedView style={{ flex: 1, padding: 24, backgroundColor: '#18181b' }}>
      <ThemedText type="title" style={{ marginBottom: 24, textAlign: 'center', color: '#fff' }}>
        Add Expense
      </ThemedText>
      <ThemedText style={{ color: '#fff' }}>Description</ThemedText>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="e.g. Dinner at Joe's"
        placeholderTextColor="#aaa"
        style={{
          borderWidth: 1,
          borderColor: '#333',
          borderRadius: 8,
          padding: 12,
          marginBottom: 16,
          fontFamily: 'PTSans_400Regular',
          backgroundColor: '#23232a',
          color: '#fff',
        }}
      />
      <ThemedText style={{ color: '#fff' }}>Amount</ThemedText>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="e.g. 42.50"
        placeholderTextColor="#aaa"
        keyboardType="decimal-pad"
        style={{
          borderWidth: 1,
          borderColor: '#333',
          borderRadius: 8,
          padding: 12,
          marginBottom: 16,
          fontFamily: 'PTSans_400Regular',
          backgroundColor: '#23232a',
          color: '#fff',
        }}
      />
      <ThemedText style={{ color: '#fff' }}>Date</ThemedText>
      <Pressable
        onPress={() => setShowDatePicker(true)}
        style={{
          borderWidth: 1,
          borderColor: '#333',
          borderRadius: 8,
          padding: 12,
          marginBottom: 16,
          backgroundColor: '#23232a',
        }}
      >
        <ThemedText style={{ color: '#fff' }}>{date.toDateString()}</ThemedText>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(_event: any, selectedDate?: Date) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}
      <Button
        title="Next"
        onPress={() => {
          if (isValid) {
            router.push({
              pathname: '/user-selection',
              params: {
                description,
                amount,
                date: date.toISOString(),
              },
            });
          }
        }}
        disabled={!isValid}
      />
    </ThemedView>
  );
} 