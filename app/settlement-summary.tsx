import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';

interface SplitUser {
  id: string;
  name: string;
  phone?: string;
  amount: number;
}

export default function SettlementSummaryScreen() {
  const { description, amount, date, splits, method } = useLocalSearchParams();
  const splitUsers: SplitUser[] = splits ? JSON.parse(splits as string) : [];
  const total = parseFloat(amount as string);
  const perUser = total / splitUsers.length;

  // For now, show a simple summary: who paid what, and who owes what
  // (Assume the first user is the payer for this demo)
  const payer = splitUsers[0];
  const others = splitUsers.slice(1);

  return (
    <ThemedView style={{ flex: 1, padding: 24, backgroundColor: '#18181b' }}>
      <ThemedText type="title" style={{ marginBottom: 16, color: '#fff' }}>Settlement Summary</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Description: {description as string}</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Amount: {amount as string}</ThemedText>
      <ThemedText style={{ color: '#fff' }}>Date: {date ? new Date(date as string).toDateString() : ''}</ThemedText>
      <ThemedText style={{ marginTop: 24, marginBottom: 8, color: '#fff' }}>Who owes whom:</ThemedText>
      {others.map(user => (
        <ThemedText key={user.id} style={{ color: '#fff' }}>
          {user.name} owes {payer.name}: {user.amount.toFixed(2)}
        </ThemedText>
      ))}
      <ThemedText style={{ marginTop: 24, color: '#0a7ea4' }}>Total paid by {payer.name}: {payer.amount.toFixed(2)}</ThemedText>
    </ThemedView>
  );
} 