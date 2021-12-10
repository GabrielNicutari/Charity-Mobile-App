import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Account Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default AccountScreen;
