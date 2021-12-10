import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Welcome Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default WelcomeScreen;
