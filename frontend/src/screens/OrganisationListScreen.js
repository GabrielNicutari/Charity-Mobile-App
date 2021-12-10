import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const OrganisationListScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Organisation List Screen!</Text>
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
