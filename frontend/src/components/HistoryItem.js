import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';
import RegularText from './RegularText';

const HistoryItem = ({ item }) => {
  console.log('item:' + item);

  return (
    <Spacer>
      <View style={styles.container}>
        <RegularText>{item}</RegularText>
      </View>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    backgroundColor: '#E9EDF3',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  }
});

export default HistoryItem;
