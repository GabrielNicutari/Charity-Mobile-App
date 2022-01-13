import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AccountScreen from './AccountScreen';
import GradientHeader from '../components/GradientHeader';

const PromotionScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.screen}>
        <Image
          source={require('../../assets/ellipse-blur.png')}
          style={styles.shadowRight}
        />
        <Image
          source={require('../../assets/ellipse-blue-blur.png')}
          style={styles.shadowLeft}
        />
        <GradientHeader text={'Rewards'} navigation={navigation} height={120} />
      </View>
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
  },
  shadowRight: {
    position: 'absolute',
    right: 0,
    bottom: -150
  },
  shadowLeft: {
    position: 'absolute',
    left: 0,
    opacity: 0.5,
    top: -120
  }
});

export default PromotionScreen;
