import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GradientHeader from '../components/GradientHeader';
import Spacer from '../components/Spacer';
import CustomButton from '../components/CustomButton';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.screen}>
      <Image
        source={require('../../assets/ellipse-blur.png')}
        style={styles.shadowRight}
      />
      <Image
        source={require('../../assets/ellipse-blue-blur.png')}
        style={styles.shadowLeft}
      />
      <GradientHeader text={'Your Account'} navigation={navigation} height={120} />

      <View style={styles.container}>
        <Spacer>
          <CustomButton title="Sign Out" action={signOut} />
        </Spacer>
      </View>
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
  },
  container: {
    marginTop: 50
  }
});

export default AccountScreen;
