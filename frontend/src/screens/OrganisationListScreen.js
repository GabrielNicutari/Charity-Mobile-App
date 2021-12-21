import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as OrganisationContext } from '../context/OrganisationContext';

const OrganisationListScreen = ({ navigation }) => {
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
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate({
              routeName: 'Organisation',
              params: {
                organisationId: item
              }
            })
          }
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  console.log(state);

  //Will be used as data field for the FlatList when category field will be implemented in database
  const categoryOrganisations = state.organisations.filter(
    (org) => org.category === navigation.getParam('organisationCategory')
  );

  return (
    <View style={styles.screen}>
      <Text>The Organisation List Screen!</Text>
      {loading ? (
        <Text>Loading data...</Text>
      ) : state.organisations.length === 0 ? (
        <Text>No organisation!</Text>
      ) : (
        <FlatList
          data={categoryOrganisations}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
      <Button
        title="Organisation #X"
        onPress={() => navigation.navigate('Organisation')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default withNavigation(OrganisationListScreen);
