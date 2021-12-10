import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrganisationListScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Organisation List Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default OrganisationListScreen;
