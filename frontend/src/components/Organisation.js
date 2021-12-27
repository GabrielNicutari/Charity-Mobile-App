import React from 'react';
import { StyleSheet, View, Image, TouchableNativeFeedback } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view';
import RegularText from './RegularText';
import BoldText from './BoldText';
import ProgressBar from './ProgressBar';
import * as Animatable from 'react-native-animatable';

const Organisation = ({ navigation, organisation, index }) => {
  return (
    <Spacer>
      <Animatable.View
        animation="bounceIn"
        duration={1000}
        delay={index * 100}
        easing="ease"
        useNativeDriver={true}
      >
        <Image
          source={require('../../assets/rectangle-blur.png')}
          style={styles.shadow}
        />

        <TouchableNativeFeedback
          onPress={() =>
            navigation.navigate({
              routeName: 'Organisation',
              params: {
                organisation: organisation
              }
            })
          }
          background={TouchableNativeFeedback.Ripple('rgba(90,90,90,0.15)', false)}
          useForeground={true}
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={{ uri: organisation.bannerImage }} style={styles.logo} />
            </View>

            <View style={styles.infoSection}>
              <BoldText style={{ fontSize: 14 }}>{organisation.name}</BoldText>

              <RegularText style={{ fontSize: 13, marginBottom: 10 }}>
                {organisation.motto}
              </RegularText>

              <ProgressBar
                step={organisation.totalProgress ? organisation.totalProgress : 10}
                steps={organisation.monthlyGoal ? organisation.monthlyGoal : 11}
                height={10}
              />

              <View style={{ flexDirection: 'row' }}>
                <RegularText
                  style={{ position: 'absolute', left: 0, top: 0, fontSize: 10 }}
                >
                  Amount raised so far:
                  <BoldText style={{ color: '#FF8900', fontSize: 11 }}>
                    {organisation.totalProgress}
                  </BoldText>
                </RegularText>
                <RegularText
                  style={{ position: 'absolute', left: 130, top: 0, fontSize: 10 }}
                >
                  Our Goal:
                  <BoldText style={{ color: '#FF8900', fontSize: 11 }}>
                    {organisation.monthlyGoal}
                  </BoldText>
                </RegularText>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </Animatable.View>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#333E63',
    fontSize: 14,
    fontFamily: 'jakarta-bold'
  },
  info: {
    fontSize: 10
  },
  container: {
    height: 100,
    borderRadius: 25,
    shadowColor: '#0047FF',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    elevation: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 5
  },
  logoContainer: {
    width: 105,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    overflow: 'hidden'
  },
  logo: {
    width: 105,
    height: 100,
    resizeMode: 'cover'
  },
  infoSection: {
    marginLeft: 5,
    marginTop: -20,
    paddingVertical: 5,
    flex: 1,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  shadow: {
    position: 'absolute',
    alignSelf: 'center'
  }
});

export default withNavigation(Organisation);
