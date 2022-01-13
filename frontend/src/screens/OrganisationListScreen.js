import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as OrganisationContext } from '../context/OrganisationContext';
import Organisation from '../components/Organisation';
import SectionText from '../components/SectionText';
import GradientHeader from '../components/GradientHeader';
import { SearchBar } from 'react-native-elements';

const OrganisationListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [masterData, setMasterData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { getOrganisations, state } = useContext(OrganisationContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      await getOrganisations();
    } catch (error) {
      console.log('ERROR\n' + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setMasterData(
      state.organisations.filter(
        (org) => org.category === navigation.getParam('organisationCategory')
      )
    );
  }, [state.organisations]);

  useEffect(() => {
    setFilteredData(masterData);
  }, [masterData]);

  useEffect(() => {
    handleSearch(keyword);
  }, [keyword]);

  const handleSearch = (text) => {
    setFilteredData(
      masterData.filter((org) => org.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const getHeader = () => {
    return <SectionText>Organisations</SectionText>;
  };

  return (
    <View style={styles.screen}>
      <Image
        source={require('../../assets/ellipse-blur.png')}
        style={styles.shadowRight}
      />
      <Image
        source={require('../../assets/ellipse-blue-blur.png')}
        style={styles.shadowLeft}
      />

      <GradientHeader text={navigation.getParam('organisationCategory')}>
        <SearchBar
          placeholder="Browse for organisations"
          value={keyword}
          onChangeText={setKeyword}
          lightTheme
          round
          inputContainerStyle={styles.searchBar}
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            alignSelf: 'center'
          }}
          inputStyle={{ color: '#305F72' }}
          showLoading
          searchIcon={{ color: '#305F72' }}
        />
      </GradientHeader>

      {loading ? (
        <Text>Loading data...</Text>
      ) : state.organisations.length === 0 ? (
        <Text>No organisation!</Text>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={({ item, index }) => {
            return <Organisation organisation={item} index={index} />;
          }}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ flexGrow: 1, marginTop: 50, paddingBottom: 110 }}
          keyboardShouldPersistTaps="always"
          ListHeaderComponent={getHeader}
        />
      )}
    </View>
  );
};

OrganisationListScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
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
  },
  searchBar: {
    width: 315,
    backgroundColor: 'white'
  }
});

export default withNavigation(OrganisationListScreen);
