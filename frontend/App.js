import React, { useEffect, useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import OrganisationCategoriesScreen from './src/screens/OrganisationCategoriesScreen';
import OrganisationListScreen from './src/screens/OrganisationListScreen';
import OrganisationScreen from './src/screens/OrganisationScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PromotionScreen from './src/screens/PromotionScreen';
import AccountScreen from './src/screens/AccountScreen';
import { Provider as OrganisationProvider } from './src/context/OrganisationContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import Loading from './src/screens/Loading';

const organisationFlow = createStackNavigator({
  OrganisationCategories: OrganisationCategoriesScreen,
  OrganisationList: OrganisationListScreen,
  Organisation: OrganisationScreen
});

const switchNavigator = createSwitchNavigator({
  Loading: Loading,
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
    <OrganisationProvider>
      <AuthProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </OrganisationProvider>
  );
};
