import { useStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { Screen } from 'react-native-screens';
import { Button, Alert } from 'react-native';
import API from '../api/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const token = await AsyncStorage.getItem('token');

    const response = await API.post(
      '/checkout',
      { id: 1 },
      {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      }
    );

    const { paymentIntent, ephemeralKey, customer } = await response.data;

    return {
      paymentIntent,
      ephemeralKey,
      customer
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      merchantDisplayName: 'Merchant'
    });

    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your donation is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <Screen>
      <Button
        variant="primary"
        disabled={!loading}
        title="Donate"
        onPress={openPaymentSheet}
      />
    </Screen>
  );
}
