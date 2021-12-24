import React, { useState } from 'react';
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
import * as Font from 'expo-font';
import AppLoadingPlaceholder from 'expo/build/launch/AppLoadingPlaceholder';
import { Image } from 'react-native';
//import { AppLoading } from 'expo';

const loadFonts = () => {
  return Font.loadAsync({
    'jakarta-regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    'jakarta-bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf')
  });
};

const organisationFlow = createStackNavigator({
  OrganisationCategories: OrganisationCategoriesScreen,
  OrganisationList: OrganisationListScreen,
  Organisation: OrganisationScreen
});

organisationFlow.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'Organisation') {
    tabBarVisible = false;
  }

  return {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/home.png')}
        style={[{ width: 35, height: 35 }, { tintColor: tintColor }]}
      />
    ),
    tabBarVisible
  };
};

const switchNavigator = createSwitchNavigator({
  Loading: Loading,
  loginFlow: createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  }),
  mainFlow: createBottomTabNavigator(
    {
      organisationFlow,
      Promotions: PromotionScreen,
      Account: AccountScreen
    },
    {
      tabBarOptions: {
        activeTintColor: '#2C78E9',
        inactiveTintColor: '#DBDBDB',
        showIcon: true,
        showLabel: false,
        style: {
          // backgroundColor: 'white',
          // shadowOffset: { width: 2, height: 2 },
          shadowColor: 'red',
          // shadowOpacity: 1,
          // shadowRadius: 15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 5,
          zIndex: 5,
          height: 60,
          borderTopWidth: 0,
          borderTopColor: 'transparent'
        },
        activeTabStyle: {
          backgroundColor: 'white',
          borderBottomWidth: 4,
          borderColor: '#6C1D7C'
        }
      }
    }
  )
});

const App = createAppContainer(switchNavigator);

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoadingPlaceholder
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

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
