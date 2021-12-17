import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Sign In Screen!</Text>
      <Button title="Main" onPress={() => navigation.navigate('mainFlow')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default withNavigation(SignInScreen);
