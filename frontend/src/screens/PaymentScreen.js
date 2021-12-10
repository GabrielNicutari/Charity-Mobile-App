import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Payment Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default PaymentScreen;
