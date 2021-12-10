import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/api/server';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  useEffect(() => {
    testConnection();
  }, []);

  const [data, setData] = useState('');

  const testConnection = async () => {
    const res = await api.get('/organisations');

    // console.log(data.data.name);
    setData(res.data[0].name);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Something {data}</Text>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
