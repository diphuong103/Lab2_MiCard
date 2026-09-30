import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const CONTACTS = [
  { icon: '☎', label: '+84 900 123 456' },
  { icon: '✉', label: 'hello@alexmorgan.dev' },
  { icon: '⌖', label: 'Ho Chi Minh City, Vietnam' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AM</Text>
        </View>

        <Text style={styles.name}>Alex Morgan</Text>
        <Text style={styles.role}>MOBILE APP DEVELOPER</Text>
        <View style={styles.divider} />

        {CONTACTS.map((contact) => (
          <View key={contact.label} style={styles.contactRow}>
            <Text style={styles.contactIcon}>{contact.icon}</Text>
            <Text style={styles.contactText}>{contact.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>MI CARD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c1726',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 36,
    borderRadius: 24,
    backgroundColor: '#16263a',
    borderColor: '#263c56',
    borderWidth: 1,
  },
  avatar: {
    width: 112,
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 56,
    backgroundColor: '#e6a94f',
    borderColor: '#f8d18c',
    borderWidth: 4,
  },
  avatarText: {
    color: '#16263a',
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: 2,
  },
  name: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '700',
    marginTop: 22,
  },
  role: {
    color: '#e6a94f',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 8,
  },
  divider: {
    width: 56,
    height: 2,
    backgroundColor: '#e6a94f',
    marginVertical: 26,
  },
  contactRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactIcon: {
    width: 42,
    color: '#e6a94f',
    fontSize: 21,
    textAlign: 'center',
  },
  contactText: {
    color: '#e7edf5',
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    color: '#718096',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 4,
    marginTop: 28,
  },
});
