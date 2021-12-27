import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrganisationScreen = ({ navigation }) => {
  const organisation = navigation.getParam('organisation');

  return (
    <View style={styles.screen}>
      <Text>{organisation.name}</Text>
      <Text>{organisation.category}</Text>
      <Text>{organisation.motto}</Text>
      <Text>{organisation.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default OrganisationScreen;
