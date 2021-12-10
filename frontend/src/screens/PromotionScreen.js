import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromotionScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Promotion Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default PromotionScreen;
