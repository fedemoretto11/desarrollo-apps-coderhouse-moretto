import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Hello There!</Text>
      <Text style={styles.red}>Soy Fede</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3465cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
