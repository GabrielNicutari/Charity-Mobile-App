import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import GradientHeader from '../components/GradientHeader';

const SignupScreen = () => {
  const { state, signUp, clearErrorMessage } = useContext(AuthContext);

  // console.log(state);

  return (
    <KeyboardAvoidingView>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <GradientHeader height={170} marginBottom={50} center />

          <View style={styles.profileContainer}>
            <Image source={require('../../assets/user.png')} style={styles.profilePic} />

            <TouchableOpacity style={styles.uploadButton}>
              <FontAwesome
                name="plus"
                size={24}
                color="white"
                style={{ alignSelf: 'center' }}
              />
            </TouchableOpacity>
          </View>

          <NavigationEvents onWillFocus={clearErrorMessage} />
          <AuthForm
            headerText="Join Us"
            sectionText="Sign Up for Do|Nation"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signUp} // same as -> onSubmit={(email, password) => signup({ email, password })}
          />
          <NavLink text="Already have an account? Sign in instead." routeName="SignIn" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  header: {
    height: 170,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  profileContainer: {
    backgroundColor: 'white',
    borderRadius: 60,
    width: 120,
    height: 120,
    elevation: 10,
    position: 'absolute',
    top: 110,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  profilePic: {
    alignSelf: 'center',
    height: 80,
    width: 80
  },
  uploadButton: {
    position: 'absolute',
    borderRadius: 15,
    width: 30,
    height: 30,
    right: 0,
    bottom: 0,
    backgroundColor: '#45546A',
    justifyContent: 'center'
  }
});

export default SignupScreen;
