import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image as RNImage } from 'react-native';
import { Image as ExpoImage } from 'expo-image';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.js
        <RNImage source={require('./assets/icon.png')} style={styles.emoji} />
        to start working
        <ExpoImage source={require('./assets/icon.png')} style={styles.emoji} />
        on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    width: 20,
    height: 20,
  },
});
