import { useStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { Screen } from 'react-native-screens';
import { Button, Alert, View } from 'react-native';
import API from '../api/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import SectionText from './SectionText';
import Spacer from './Spacer';
import ProgressBar from './ProgressBar';
import RegularText from './RegularText';
import BoldText from './BoldText';

export default function CheckoutSection({ organisation }) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const token = await AsyncStorage.getItem('token');

    const response = await API.post(
      '/checkout',
      { organisation: organisation.name },
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
    initializePaymentSheet().then();
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 100,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        elevation: 5
      }}
    >
      <View>
        <BoldText style={{ fontSize: 20 }}>Progress</BoldText>

        <RegularText style={{ marginBottom: 10 }}>
          Monthly Goal:&nbsp;
          <BoldText style={{ color: '#FF8900', fontSize: 16 }}>
            {organisation.totalProgress}
          </BoldText>
          <RegularText style={{ fontSize: 16 }}>&nbsp;/&nbsp;</RegularText>
          <BoldText style={{ color: '#FF8900', fontSize: 16 }}>
            {organisation.monthlyGoal}
          </BoldText>
        </RegularText>

        <ProgressBar
          step={organisation.totalProgress ? organisation.totalProgress : 10}
          steps={organisation.monthlyGoal ? organisation.monthlyGoal : 11}
          height={10}
        />
      </View>

      <CustomButton
        variant="primary"
        disabled={!loading}
        title="Donate"
        height={50}
        action={openPaymentSheet}
      />
    </View>
  );
}
