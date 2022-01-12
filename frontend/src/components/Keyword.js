import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import BoldText from './BoldText';

const Keyword = ({ keyword }) => {
  console.log('keyword:' + keyword);

  return (
    <View style={styles.container}>
      <BoldText style={styles.text}>{keyword}</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
    backgroundColor: '#E9EDF3',
    width: 110,
    height: 40,
    borderRadius: 45,
    justifyContent: 'center'
  }
});

export default Keyword;
