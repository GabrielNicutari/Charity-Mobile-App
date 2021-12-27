import React from 'react';
import { StyleSheet, Text } from 'react-native';

const RegularText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'jakarta-bold',
    color: '#333E63',
    fontSize: 14
  }
});

export default RegularText;
