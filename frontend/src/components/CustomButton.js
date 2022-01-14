import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ title, action, height, disabled, checkout }) => {
  let colorA = '#749ef8';
  let colorB = '#1a53d0';

  if (checkout) {
    colorA = '#f26522';
    colorB = '#ed1c24';
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.button, { shadowColor: colorB }]}
        colors={[colorA, colorB]}
        end={{ x: 1, y: 0 }}
      >
        <Button
          buttonStyle={{ backgroundColor: 'transparent', height: height }}
          titleStyle={{ fontWeight: 'bold', fontFamily: 'jakarta-bold' }}
          title={title}
          onPress={action}
          disabled={disabled}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50
  },
  button: {
    borderRadius: 50,
    width: 150,
    elevation: 10,
    overflow: 'hidden'
  }
});

export default CustomButton;
