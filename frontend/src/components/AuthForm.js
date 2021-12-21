import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import CustomButton from './CustomButton';

const AuthForm = ({
  headerText,
  errorMessage,
  submitButtonText,
  onSubmit,
  sectionText
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h1 style={styles.headerText}>
          {headerText}
        </Text>
      </Spacer>
      <Spacer>
        <Text style={styles.sectionText}>{sectionText}</Text>
      </Spacer>

      <Spacer />

      <Spacer>
        <Input
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholder="Email"
          inputStyle={styles.text}
        />
      </Spacer>

      <Spacer />

      <Spacer>
        <Input
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholder="Password"
          inputStyle={styles.text}
        />
      </Spacer>

      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      ) : null}

      <Spacer />
      <Spacer />

      <Spacer>
        <CustomButton
          title={submitButtonText}
          action={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15
  },
  headerText: {
    color: '#45546A'
  },
  sectionText: {
    color: '#45546A',
    fontSize: 18
  },
  inputContainer: {
    borderRadius: 50,
    height: 42,
    backgroundColor: 'white',
    shadowOffset: { width: 2, height: 4 },
    shadowColor: 'rgba(58,55,55,0.5)',
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 8,
    justifyContent: 'center',
    paddingTop: 25
  },
  input: {
    height: 30,
    borderBottomWidth: 0
  },
  text: {
    color: '#45546A'
  }
});

export default AuthForm;
