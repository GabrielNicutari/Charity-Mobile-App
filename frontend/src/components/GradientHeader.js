import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Spacer from './Spacer';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import BoldText from './BoldText';

const GradientHeader = ({ text, height, marginBottom, center, children, navigation }) => {
  return (
    <LinearGradient
      style={[
        styles.header,
        height ? { height } : null,
        marginBottom ? { marginBottom } : null,
        center ? { alignItems: 'center' } : null
      ]}
      colors={['#5E8DEC', '#2E66DC']}
      end={{ x: 0, y: 1 }}
    >
      {text ? (
        <Spacer>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginRight: 20
              }}
            >
              <Ionicons name="arrow-back" size={28} color="white" />
            </TouchableOpacity>
            <BoldText style={styles.title}>{text}</BoldText>
          </View>
        </Spacer>
      ) : null}

      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    height: 190,
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: -50,
    elevation: 5
  },
  title: {
    fontSize: 20,
    color: 'white',
    // fontFamily: 'jakarta-bold',
    lineHeight: 20
  }
});

export default withNavigation(GradientHeader);
