import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import BoldText from './BoldText';

const SectionText = ({ children }) => {
  return (
    <Spacer>
      <BoldText style={styles.text}>{children}</BoldText>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default SectionText;
