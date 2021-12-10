import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OrganisationScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Organisation Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default OrganisationScreen;
