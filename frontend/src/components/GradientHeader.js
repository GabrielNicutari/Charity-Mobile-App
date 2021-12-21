import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Spacer from './Spacer';

const GradientHeader = ({ text, height, marginBottom, center, children }) => {
  return (
    <LinearGradient
      style={[
        styles.header,
        height ? { height } : null,
        marginBottom ? { marginBottom } : null,
        center ? { alignItems: 'center' } : null
      ]}
      colors={['#ed1c24', '#f26522']}
      end={{ x: 1, y: 1 }}
    >
      {text ? (
        <Spacer>
          <Text style={styles.title}>{text}</Text>
        </Spacer>
      ) : null}

      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    // alignItems: 'center',
    height: 150,
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default GradientHeader;
