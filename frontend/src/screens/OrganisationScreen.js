import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import API from '../api/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from '../components/CheckoutScreen';

const OrganisationScreen = ({ navigation }) => {
  const organisation = navigation.getParam('organisation');

  return (
    <View style={styles.screen}>
      <Text>{organisation.name}</Text>
      <Text>{organisation.category}</Text>
      <Text>{organisation.motto}</Text>
      <Text>{organisation.overview}</Text>

      <CheckoutScreen organisation={organisation.name} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default OrganisationScreen;
