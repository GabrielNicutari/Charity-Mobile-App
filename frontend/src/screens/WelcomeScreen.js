import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoldText from '../components/BoldText';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BoldText>The Welcome Screen!</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default WelcomeScreen;
