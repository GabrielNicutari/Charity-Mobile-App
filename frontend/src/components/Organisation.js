import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view';

const Organisation = ({ navigation, organisation }) => {
  return (
    <Spacer>
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
            <Text style={styles.text}>{organisation.name}</Text>

            <Text style={styles.text}>{organisation.motto}</Text>

            {/*<SimpleGradientProgressbarView*/}
            {/*  fromColor="#FF0000"*/}
            {/*  toColor="#0000FF"*/}
            {/*  progress={0.5}*/}
            {/*  maskedCorners={[0, 0, 1, 1]}*/}
            {/*  cornerRadius={7.0}*/}
            {/*/>*/}
          </View>
        </View>
      </TouchableNativeFeedback>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#333E63',
    fontSize: 14,
    fontFamily: 'jakarta-regular'
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
    flexDirection: 'row'
  },
  logoContainer: {
    width: 110,
    // borderColor: 'blue',
    // borderWidth: 2,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    overflow: 'hidden'
  },
  logo: {
    width: 110,
    height: 100
  },
  infoSection: {
    marginLeft: 20
  }
});

export default withNavigation(Organisation);
