import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrganisationCategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default OrganisationCategoriesScreen;
