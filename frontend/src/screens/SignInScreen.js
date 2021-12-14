import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import API from '../api/server';

const SignInScreen = ({ navigation }) => {
  const [organisations, setOrganisations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await API.get('/organisations');
      setOrganisations([1, 2, 3, 4, 5, 6]);
      // setOrganisations(result.data);
    } catch (error) {
      console.log('ERROR\n' + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData().then(console.log(organisations));
  }, []);

  return (
    <View style={styles.screen}>
      <Text>The Sign In Screen!</Text>

      {organisations.map((item, index) => (
        <Text key={index}> {item} </Text>
      ))}

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
