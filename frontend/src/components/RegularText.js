import React from 'react';
import { StyleSheet, Text } from 'react-native';

const RegularText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'jakarta-regular',
    color: '#333E63'
  }
});

export default RegularText;
