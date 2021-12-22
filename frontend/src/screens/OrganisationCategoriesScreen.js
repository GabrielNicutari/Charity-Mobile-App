import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const categories = [
  { id: 1, name: 'Health' },
  { id: 2, name: 'Environment' },
  { id: 3, name: 'Fight Against Hunger' },
  { id: 4, name: 'Animal' }
];

const OrganisationCategoriesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate({
              routeName: 'OrganisationList',
              params: {
                organisationCategory: item.name
              }
            })
          }
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text>The Organisation Categories Screen!</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.listContainer}
      />
      <Button title="List" onPress={() => navigation.navigate('OrganisationList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  listContainer: {
    margin: 15
  },
  listItem: {
    width: 250,
    margin: 15,
    backgroundColor: '#aaa',
    justifyContent: 'center'
  },
  itemText: {
    backgroundColor: '#bbb',
    padding: 20,
    width: 250,
    justifyContent: 'center',
    textAlign: 'center',
    opacity: 0.8
  }
});

export default OrganisationCategoriesScreen;
