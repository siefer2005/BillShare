import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Contacts from 'expo-contacts';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, View } from 'react-native';

export default function UserSelectionScreen() {
  const { description, amount, date } = useLocalSearchParams();
  const router = useRouter();
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access contacts was denied');
        setLoading(false);
        return;
      }
      const { data } = await Contacts.getContactsAsync({ fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers] });
      setContacts(data.filter(c => c.name && c.phoneNumbers && c.phoneNumbers.length > 0));
      setLoading(false);
    })();
  }, []);

  const toggleSelect = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  if (loading) {
    return <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" /></ThemedView>;
  }
  if (error) {
    return <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ThemedText>{error}</ThemedText></ThemedView>;
  }

  return (
    <ThemedView style={{ flex: 1, padding: 24, backgroundColor: '#18181b' }}>
      <ThemedText type="title" style={{ marginBottom: 16, color: '#fff' }}>Select Users</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Description: {description as string}</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Amount: {amount as string}</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Date: {date ? new Date(date as string).toDateString() : ''}</ThemedText>
      <FlatList
        data={contacts}
        keyExtractor={item => String(item.id)}
        style={{ marginTop: 24, marginBottom: 16 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => toggleSelect(String(item.id))}
            style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, backgroundColor: '#23232a', borderRadius: 8, marginBottom: 6 }}
          >
            <View style={{
              width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#0a7ea4', marginRight: 12,
              backgroundColor: selected.includes(String(item.id)) ? '#0a7ea4' : 'transparent',
              justifyContent: 'center', alignItems: 'center',
            }}>
              {selected.includes(String(item.id)) && <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#fff' }} />}
            </View>
            <ThemedText style={{ color: '#fff' }}>{item.name} ({item.phoneNumbers?.[0]?.number})</ThemedText>
          </Pressable>
        )}
      />
      <Pressable
        onPress={() => {
          if (selected.length > 0) {
            router.push({
              pathname: '/split-method',
              params: {
                description,
                amount,
                date,
                users: JSON.stringify(contacts.filter(c => selected.includes(String(c.id))).map(c => ({ id: c.id, name: c.name, phone: c.phoneNumbers?.[0]?.number })) ),
              },
            });
          }
        }}
        style={{
          backgroundColor: selected.length > 0 ? '#0a7ea4' : '#ccc',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
        }}
        disabled={selected.length === 0}
      >
        <ThemedText style={{ color: '#fff', fontWeight: 'bold' }}>Next</ThemedText>
      </Pressable>
    </ThemedView>
  );
} 