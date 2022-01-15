import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const NextButton = ({ scrollTo, percentage }) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset = circumference - (circumference * value.value) / 100;

        if (progressRef.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset
          });
        }
      },
      [percentage]
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#999FB1"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />

          <Circle
            ref={progressRef}
            stroke="#ed1c24"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>

      <TouchableOpacity
        style={{
          borderRadius: 100,
          position: 'absolute',
          padding: 35,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        activeOpacity={0.5}
        onPress={scrollTo}
      >
        <LinearGradient
          style={[styles.button, { shadowColor: '#ed1c24' }]}
          colors={['#f26522', '#ee4801', '#ed1c24']}
          end={{ x: 1, y: 0 }}
        >
          <AntDesign name="arrowright" size={32} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    position: 'absolute',
    // backgroundColor: '#e25100',
    borderRadius: 100,
    padding: 20,
    elevation: 10
  }
});

export default NextButton;
