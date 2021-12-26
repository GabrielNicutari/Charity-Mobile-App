import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const ProgressBar = ({ step, steps, height }) => {
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;

        setWidth(newWidth);
      }}
      style={{
        height,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: height,
        overflow: 'hidden'
      }}
    >
      <Animated.View
        style={{
          height,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: height,
          position: 'absolute',
          left: 0,
          top: 0,
          transform: [{ translateX: animatedValue }]
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProgressBar;
