import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ItalicText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'jakarta-italic',
    color: '#333E63'
  }
});

export default ItalicText;
