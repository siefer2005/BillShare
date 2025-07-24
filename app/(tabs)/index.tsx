import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

const recentActivity = [
  {
    id: '1',
    title: 'Dinner at Mark’s',
    detail: 'Split with 5 friends',
    amount: 15.75,
    status: 'Paid',
    color: '#e6f7f1',
  },
  {
    id: '2',
    title: 'Uber ride home',
    detail: 'You paid for Sarah',
    amount: 12.40,
    status: 'Pending',
    color: '#fffbe6',
  },
];

const groups = [
  {
    id: 'g1',
    name: 'Roommates',
    members: 4,
    youOwe: 45.2,
    youAreOwed: 12.8,
  },
  {
    id: 'g2',
    name: 'Europe Trip',
    members: 6,
    youOwe: 125.4,
    youAreOwed: 89.2,
  },
  {
    id: 'g3',
    name: 'Food Squad',
    members: 5,
    youOwe: 0,
    youAreOwed: 67.4,
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#18181b' }} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={{ color: '#4f46e5', fontSize: 24, fontWeight: 'bold' }}>
          Split
        </ThemedText>
        <ThemedText type="title" style={{ color: '#06b6d4', fontSize: 24, fontWeight: 'bold', marginLeft: 2 }}>
          Flow
        </ThemedText>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Ionicons name="notifications-outline" size={24} color="#4f46e5" />
          <Ionicons name="person-circle-outline" size={28} color="#4f46e5" />
        </View>
      </ThemedView>
      {/* Subheader */}
      <ThemedText style={styles.subheader}>
        <ThemedText type="title" style={{ fontSize: 20, color: '#222', fontWeight: 'bold' }}>Split expenses with</ThemedText>
        <ThemedText type="title" style={{ fontSize: 20, color: '#06b6d4', fontWeight: 'bold' }}> elegance</ThemedText>
      </ThemedText>
      <ThemedText style={{ textAlign: 'center', color: '#888', marginBottom: 16 }}>
        A modern take on expense sharing with beautiful design
      </ThemedText>
      {/* Create New Expense Button */}
      <Pressable style={styles.createBtn}>
        <Ionicons name="add-circle" size={20} color="#fff" />
        <ThemedText style={{ color: '#fff', fontWeight: 'bold', marginLeft: 8 }}>Create New Expense</ThemedText>
      </Pressable>
      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <ThemedText style={styles.balanceLabel}>Your Balance</ThemedText>
        <ThemedText type="title" style={styles.balanceAmount}>$247.50</ThemedText>
        <View style={styles.balanceRow}>
          <View style={styles.balanceCol}>
            <ThemedText style={styles.oweLabel}>You owe</ThemedText>
            <ThemedText style={styles.oweAmount}>$89.30</ThemedText>
          </View>
          <View style={styles.balanceCol}>
            <ThemedText style={styles.owedLabel}>Owed to you</ThemedText>
            <ThemedText style={styles.owedAmount}>$336.80</ThemedText>
          </View>
        </View>
      </View>
      {/* Recent Activity */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>Recent Activity</ThemedText>
      <View style={styles.activityList}>
        {recentActivity.map(item => (
          <View key={item.id} style={[styles.activityItem, { backgroundColor: item.color }] }>
            <View style={{ flex: 1 }}>
              <ThemedText style={{ fontWeight: 'bold' }}>{item.title}</ThemedText>
              <ThemedText style={{ color: '#888', fontSize: 13 }}>{item.detail}</ThemedText>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <ThemedText style={{ fontWeight: 'bold', fontSize: 16 }}>${item.amount.toFixed(2)}</ThemedText>
              <ThemedText style={{ color: item.status === 'Paid' ? '#22c55e' : '#eab308', fontWeight: 'bold', fontSize: 13 }}>{item.status}</ThemedText>
            </View>
          </View>
        ))}
      </View>
      {/* Groups */}
      <View style={styles.groupsHeader}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Your Groups</ThemedText>
        <Pressable style={styles.newGroupBtn}>
          <Ionicons name="add" size={18} color="#fff" />
          <ThemedText style={{ color: '#fff', marginLeft: 4 }}>New</ThemedText>
        </Pressable>
      </View>
      <View style={styles.groupsList}>
        {groups.map(group => (
          <View key={group.id} style={styles.groupCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <View style={styles.groupAvatar}><ThemedText style={{ color: '#fff', fontWeight: 'bold' }}>{group.name[0]}</ThemedText></View>
              <ThemedText style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 8 }}>{group.name}</ThemedText>
              <ThemedText style={{ color: '#888', marginLeft: 8 }}>{group.members} members</ThemedText>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <View style={styles.oweBox}><ThemedText style={styles.oweBoxText}>{`You owe\n$${group.youOwe.toFixed(2)}`}</ThemedText></View>
              <View style={styles.owedBox}><ThemedText style={styles.owedBoxText}>{`You're owed\n$${group.youAreOwed.toFixed(2)}`}</ThemedText></View>
            </View>
          </View>
        ))}
      </View>
      {/* Mobile Design Features */}
      <View style={styles.featuresSection}>
        <ThemedText type="subtitle" style={{ marginBottom: 8 }}>Mobile Design Features</ThemedText>
        <ThemedText style={{ fontWeight: 'bold', marginBottom: 4 }}>Mobile-First Design</ThemedText>
        <ThemedText style={styles.featureItem}>• Compact header with essential actions</ThemedText>
        <ThemedText style={styles.featureItem}>• Touch-friendly button sizing (48px+)</ThemedText>
        <ThemedText style={styles.featureItem}>• Single-column layout for easy scanning</ThemedText>
        <ThemedText style={styles.featureItem}>• Large text for better readability</ThemedText>
        <ThemedText style={{ fontWeight: 'bold', marginTop: 12, marginBottom: 4 }}>Mobile UX Patterns</ThemedText>
        <ThemedText style={styles.featureItem}>• Card-based information architecture</ThemedText>
        <ThemedText style={styles.featureItem}>• Prominent CTA (button) placement</ThemedText>
        <ThemedText style={styles.featureItem}>• Color-coded status indicators</ThemedText>
        <ThemedText style={styles.featureItem}>• Bottom navigation friendly</ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  subheader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7c3aed',
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 16,
    marginTop: 4,
  },
  balanceCard: {
    backgroundColor: '#7c3aed',
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  balanceLabel: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  balanceCol: {
    flex: 1,
    alignItems: 'center',
  },
  oweLabel: {
    color: '#fca5a5',
    fontWeight: 'bold',
  },
  oweAmount: {
    color: '#fca5a5',
    fontWeight: 'bold',
    fontSize: 18,
  },
  owedLabel: {
    color: '#bbf7d0',
    fontWeight: 'bold',
  },
  owedAmount: {
    color: '#bbf7d0',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionTitle: {
    marginLeft: 20,
    marginTop: 8,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 18,
  },
  activityList: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  groupsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 4,
  },
  newGroupBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7c3aed',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  groupsList: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  groupCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  groupAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fca5a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oweBox: {
    backgroundColor: '#fef2f2',
    borderRadius: 8,
    padding: 8,
    flex: 1,
    alignItems: 'center',
  },
  oweBoxText: {
    color: '#ef4444',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  owedBox: {
    backgroundColor: '#f0fdf4',
    borderRadius: 8,
    padding: 8,
    flex: 1,
    alignItems: 'center',
  },
  owedBoxText: {
    color: '#22c55e',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  featuresSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  featureItem: {
    color: '#555',
    marginBottom: 2,
    fontSize: 15,
  },
});
