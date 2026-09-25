import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>DP</Text>
        </View>
        <Text style={styles.name}>Dinh Phuong</Text>
        <Text style={styles.role}>REACT NATIVE DEVELOPER</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.contactCard}>
        <Text style={styles.contactIcon}>☎</Text>
        <Text style={styles.contactText}>+84 901 234 567</Text>
      </View>
      <View style={styles.contactCard}>
        <Text style={styles.contactIcon}>✉</Text>
        <Text style={styles.contactText}>dinhphuong@example.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123b3a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  profile: {
    alignItems: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d6b36a',
    borderWidth: 4,
    borderColor: '#f4e2b5',
  },
  avatarText: {
    color: '#123b3a',
    fontSize: 42,
    fontWeight: '700',
  },
  name: {
    color: '#f4e2b5',
    fontSize: 34,
    fontWeight: '700',
    marginTop: 18,
  },
  role: {
    color: '#d6b36a',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 8,
  },
  divider: {
    width: '82%',
    height: 1,
    backgroundColor: '#d6b36a',
    marginVertical: 28,
  },
  contactCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4e2b5',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginVertical: 6,
  },
  contactIcon: {
    width: 32,
    color: '#123b3a',
    fontSize: 22,
    textAlign: 'center',
  },
  contactText: {
    color: '#123b3a',
    fontSize: 17,
    marginLeft: 12,
  },
});
