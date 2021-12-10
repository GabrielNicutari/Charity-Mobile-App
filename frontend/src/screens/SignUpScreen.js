import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The SignUp Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default SignUpScreen;
