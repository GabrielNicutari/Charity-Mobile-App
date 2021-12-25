import React, { useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';
import OrganisationCategory from '../components/OrganisationCategory';
import HealthCare from '../../assets/health-care.jpg';
import SaveThePlanet from '../../assets/save-the-planet.jpg';
import FightAgainstHunger from '../../assets/fight-against-hunger.jpg';
import AnimalCare from '../../assets/animal-care.jpg';
import Paginator from '../components/Paginator';

const categories = [
  { id: 1, name: 'Health Care', image: HealthCare },
  { id: 2, name: 'Save The Planet', image: SaveThePlanet },
  { id: 3, name: 'Fight Against Hunger', image: FightAgainstHunger },
  { id: 4, name: 'Animal Care', image: AnimalCare }
];

const OrganisationCategoriesScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.screen}>
      <View style={{ flex: 0.9 }}>
        <FlatList
          data={categories}
          renderItem={({ item }) => {
            return <OrganisationCategory category={item} />;
          }}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }
            ],
            {
              useNativeDriver: false
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={categories} scrollX={scrollX} />
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  }
});

export default OrganisationCategoriesScreen;
