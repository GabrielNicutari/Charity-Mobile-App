import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import GradientHeader from '../components/GradientHeader';

const SignInScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(Context);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <GradientHeader height={230} center>
            {/*<Image source={require('../../assets/Logo_hvid.png')} />*/}
          </GradientHeader>

          <NavigationEvents onWillFocus={clearErrorMessage} />
          <AuthForm
            headerText="Hello"
            sectionText="Sign In to Your Account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signIn}
          />
          <NavLink text="Don't have an account? Sign up instead." routeName="SignUp" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  header: {
    height: 230,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,

    elevation: 15
  }
});

export default SignInScreen;
