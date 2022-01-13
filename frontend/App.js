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
import * as Font from 'expo-font';
import AppLoadingPlaceholder from 'expo/build/launch/AppLoadingPlaceholder';
import TabBar from './src/components/TabBar';
import { Image } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import API from './src/api/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loadFonts = () => {
  return Font.loadAsync({
    'jakarta-regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    'jakarta-bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'jakarta-italic': require('./assets/fonts/PlusJakartaSans-Italic.ttf'),
    'jakarta-bold-italic': require('./assets/fonts/PlusJakartaSans-BoldItalic.ttf')
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
      // <TabBar tintColor={tintColor}>
      <Image
        source={require('./assets/home.png')}
        style={[{ width: 35, height: 35, alignSelf: 'center' }, { tintColor: tintColor }]}
      />
      // </TabBar>
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
          // shadowOffset: { width: 2, height: 2 },
          // shadowColor: 'red',
          // shadowOpacity: 1,
          // shadowRadius: 15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          elevation: 5,
          // zIndex: 5,
          height: 60,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          overflow: 'hidden',
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          width: '98%',
          alignSelf: 'center'
        }
      }
    }
  )
});

const App = createAppContainer(switchNavigator);

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [publishableKey, setPublishableKey] = useState('');

  const fetchPublishableKey = async () => {
    const token = await AsyncStorage.getItem('token');

    const response = await API.get('/stripe-key', {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    });

    setPublishableKey(response.data.publishableKey);
  };

  useEffect(() => {
    fetchPublishableKey().then();
  }, []);

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
    <StripeProvider
      publishableKey={publishableKey}
      enableGooglePay={true}
      // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <OrganisationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </OrganisationProvider>
    </StripeProvider>
  );
};
