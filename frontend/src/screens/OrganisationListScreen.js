import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as OrganisationContext } from '../context/OrganisationContext';
import OrganisationCategory from '../components/OrganisationCategory';
import Organisation from '../components/Organisation';
import SectionText from '../components/SectionText';

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

  console.log(state);

  //Will be used as data field for the FlatList when category field will be implemented in database
  const organisations = state.organisations.filter(
    (org) => org.category === navigation.getParam('organisationCategory')
  );

  return (
    <View style={styles.screen}>
      <SectionText text="Organisations" />
      <Image
        source={require('../../assets/ellipse-blur.png')}
        style={styles.shadowRight}
      />
      <Image
        source={require('../../assets/ellipse-blue-blur.png')}
        style={styles.shadowLeft}
      />
      {loading ? (
        <Text>Loading data...</Text>
      ) : state.organisations.length === 0 ? (
        <Text>No organisation!</Text>
      ) : (
        <FlatList
          data={organisations}
          renderItem={({ item }) => {
            return <Organisation organisation={item} />;
          }}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ flex: 1 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  },
  shadowRight: {
    position: 'absolute',
    right: 0,
    bottom: -150
  },
  shadowLeft: {
    position: 'absolute',
    left: 0,
    opacity: 0.5,
    top: -120
  }
});

export default withNavigation(OrganisationListScreen);
