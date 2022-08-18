
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import SignInScreen from './components/SignInScreen'
export default function App() {
  return (
    <View style={styles.root}>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#F9FBFC'
  },
});
