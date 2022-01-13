import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const SectionText = ({ children }) => {
  return (
    <Spacer>
      <Text style={styles.text}>{children}</Text>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#333E63',
    fontSize: 20,
    fontFamily: 'jakarta-bold'
  }
});

export default SectionText;
