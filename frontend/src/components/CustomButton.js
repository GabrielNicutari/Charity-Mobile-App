import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ title, action, height, disabled }) => {
  let colorA = '#f26522';
  let colorB = '#ed1c24';

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.button}
        colors={[colorA, colorB]}
        end={{ x: 1, y: 1 }}
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
    borderRadius: 50,
    overflow: 'hidden'
  },
  button: {
    borderRadius: 50,
    width: 150
  }
});

export default CustomButton;
