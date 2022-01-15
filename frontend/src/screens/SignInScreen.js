import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import GradientHeader from '../components/GradientHeader';
import BoldText from '../components/BoldText';

const SignInScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={{ flex: 1 }}>
          <GradientHeader height={230} center>
            {/*<Image source={require('../../assets/Logo_hvid.png')} />*/}
            <BoldText style={{ color: 'white', fontSize: 48 }}>Do | Nation</BoldText>
          </GradientHeader>

          <NavigationEvents onWillFocus={clearErrorMessage} />
          <View style={{ marginTop: 50 }}>
            <AuthForm
              headerText="Hello"
              sectionText="Sign In to Your Account"
              errorMessage={state.errorMessage}
              submitButtonText="Sign In"
              onSubmit={signIn}
            />
          </View>
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

const styles = StyleSheet.create({});

export default SignInScreen;
