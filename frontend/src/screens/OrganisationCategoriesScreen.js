import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

const OrganisationCategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Organisation Categories Screen!</Text>
      <Button title="List" onPress={() => navigation.navigate('OrganisationList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default withNavigation(OrganisationCategoriesScreen);
