import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AccountScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Account Screen!</Text>
    </View>
  );
};

AccountScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/user.png')}
      style={[{ width: 30, height: 30 }, { tintColor: tintColor }]}
    />
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default AccountScreen;
