import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BoldItalicText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'jakarta-bold-italic',
    color: '#333E63'
  }
});

export default BoldItalicText;
