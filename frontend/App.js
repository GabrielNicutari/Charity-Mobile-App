import React, { useEffect, useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import OrganisationCategoriesScreen from './src/screens/OrganisationCategoriesScreen';
import OrganisationListScreen from './src/screens/OrganisationListScreen';
import OrganisationScreen from './src/screens/OrganisationScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const organisationFlow = createStackNavigator({
  OrganisationCategories: OrganisationCategoriesScreen,
  OrganisationList: OrganisationListScreen,
  Organisation: OrganisationScreen
});

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  }),
  mainFlow: createBottomTabNavigator({
    organisationFlow,
    Promotions: PromotionScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App>
      <WelcomeScreen />
    </App>
  );
};
