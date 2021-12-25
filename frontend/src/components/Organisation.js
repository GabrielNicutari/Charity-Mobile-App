import React from 'react';
import { StyleSheet, View, Image, TouchableNativeFeedback } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view';
import RegularText from './RegularText';
import BoldText from './BoldText';

const Organisation = ({ navigation, organisation }) => {
  return (
    <Spacer>
      <Image source={require('../../assets/rectangle-blur.png')} style={styles.shadow} />
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

            <RegularText style={{ fontSize: 13 }}>{organisation.motto}</RegularText>

            <View style={{ flexDirection: 'row' }}>
              <RegularText style={{ position: 'absolute', left: 0, fontSize: 10 }}>
                Amount raised so far:
                <BoldText style={{ color: '#FF8900', fontSize: 12 }}>10</BoldText>
              </RegularText>
              <RegularText style={{ position: 'absolute', left: 130, fontSize: 10 }}>
                Our Goal:
                <BoldText style={{ color: '#FF8900', fontSize: 12 }}>
                  {organisation.monthlyGoal}
                </BoldText>
              </RegularText>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
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
    height: 100
  },
  infoSection: {
    marginLeft: 10,
    paddingVertical: 5
  },
  shadow: {
    position: 'absolute',
    alignSelf: 'center'
  }
});

export default withNavigation(Organisation);
