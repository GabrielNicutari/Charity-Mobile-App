import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ title, action, height }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.button}
        colors={['#f26522', '#ed1c24']}
        end={{ x: 1, y: 1 }}
      >
        <Button
          buttonStyle={{ backgroundColor: 'transparent', height: height }}
          titleStyle={{ fontWeight: 'bold' }}
          title={title}
          onPress={action}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 50,
    width: 150
  }
});

export default CustomButton;
