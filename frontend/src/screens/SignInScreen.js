import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignInScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Sign In Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default SignInScreen;