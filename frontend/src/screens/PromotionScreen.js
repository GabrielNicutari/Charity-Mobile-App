import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AccountScreen from './AccountScreen';

const PromotionScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Promotion Screen!</Text>
    </View>
  );
};

PromotionScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/prize.png')}
      style={[{ width: 35, height: 35 }, { tintColor: tintColor }]}
    />
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default PromotionScreen;
