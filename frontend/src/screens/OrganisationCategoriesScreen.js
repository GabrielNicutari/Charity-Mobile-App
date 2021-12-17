import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as OrganisationContext } from '../context/OrganisationContext';

const OrganisationCategoriesScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const { getOrganisations, state } = useContext(OrganisationContext);

  useEffect(() => {
    fetchData().then(console.log('data fetched!'));
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      getOrganisations();
    } catch (error) {
      console.log('ERROR\n' + error);
    }
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  // console.log(organisationContext.state);
  return (
    <View style={styles.screen}>
      <Text>The Organisation Categories Screen!</Text>

      {
        // temporary code, JUST FOR TESTING
        loading ? (
          <Text>Loading data...</Text>
        ) : state.organisations.length === 0 ? (
          <Text>No organisation!</Text>
        ) : (
          <FlatList
            data={state.organisations}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        ) // temporary code, JUST FOR TESTING
      }

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
