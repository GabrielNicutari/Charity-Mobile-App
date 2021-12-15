import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import API from '../api/server';

const SignInScreen = ({ navigation }) => {
  const [organisations, setOrganisations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await API.get('/organisations');
      setOrganisations(result.data);
    } catch (error) {
      console.log('ERROR\n' + error);
    }
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  useEffect(() => {
    fetchData().then(() => console.log('data fetched!'));
  }, []);

  // console.log(organisations);
  return (
    <View style={styles.screen}>
      <Text>The Sign In Screen!</Text>

      {loading ? (
        <Text>Loading data...</Text>
      ) : organisations.length === 0 ? (
        <Text>No organisation!</Text>
      ) : (
        // <Text>{organisations}</Text>
        <FlatList
          data={organisations}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}

      <Button title="Main" onPress={() => navigation.navigate('mainFlow')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default withNavigation(SignInScreen);
