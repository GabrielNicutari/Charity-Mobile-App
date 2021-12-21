import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  let sentences = text.split('?');

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}
      onPress={() => navigation.navigate(routeName)}
    >
      <Text style={styles.link}>{sentences[0]}?</Text>
      <Text style={[styles.link, { fontWeight: 'bold' }]}>{sentences[1]}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#45546A'
  }
});

export default withNavigation(NavLink);
