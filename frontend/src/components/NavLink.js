import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import RegularText from './RegularText';
import BoldText from './BoldText';

const NavLink = ({ navigation, text, routeName }) => {
  let sentences = text.split('?');

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20
      }}
      onPress={() => navigation.navigate(routeName)}
    >
      <RegularText>{sentences[0]}?</RegularText>
      <BoldText>{sentences[1]}</BoldText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(NavLink);
