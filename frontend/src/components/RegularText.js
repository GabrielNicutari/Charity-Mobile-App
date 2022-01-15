import React from 'react';
import { StyleSheet, Text } from 'react-native';

const RegularText = ({ children, style, center }) => {
  return (
    <Text style={[styles.text, style, { textAlign: center ? 'center' : 'auto' }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'jakarta-regular',
    color: '#333E63'
  }
});

export default RegularText;
