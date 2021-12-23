import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import OrganisationCategory from '../components/OrganisationCategory';
import HealthCare from '../../assets/health-care.jpg';
import SaveThePlanet from '../../assets/save-the-planet.jpg';
import FightAgainstHunger from '../../assets/fight-against-hunger.jpg';
import AnimalCare from '../../assets/animal-care.jpg';

const categories = [
  { id: 1, name: 'Health Care', image: HealthCare },
  { id: 2, name: 'Save The Planet', image: SaveThePlanet },
  { id: 3, name: 'Fight Against Hunger', image: FightAgainstHunger },
  { id: 4, name: 'Animal Care', image: AnimalCare }
];

const OrganisationCategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={({ item }) => {
          return <OrganisationCategory category={item} />;
        }}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{ alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

OrganisationCategoriesScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default OrganisationCategoriesScreen;
