import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const SectionText = ({ text }) => {
  return (
    <Spacer>
      <Text style={styles.text}>{text}</Text>
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
