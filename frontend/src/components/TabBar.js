import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { withNavigation } from 'react-navigation';

const TabBar = ({ navigation, children }) => {
  let buttonSize = new Animated.Value(1);

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: 'red',
    borderWidth: 2
  };

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 1.2,
        duration: 50,
        useNativeDriver: true
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: true
      })
    ]).start();
  };

  return (
    <Animated.View style={sizeStyle}>
      <TouchableWithoutFeedback
        onPress={
          handlePress
          // navigation.navigate('OrganisationCategories');
        }
      >
        {children}
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  spacer: {
    marginVertical: 10,
    marginHorizontal: 20
  }
});

export default withNavigation(TabBar);
