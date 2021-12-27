import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProgressBar = ({ step, steps, height }) => {
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 800,
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
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: height,
          position: 'absolute',
          left: 0,
          top: 0,
          transform: [{ translateX: animatedValue }],
          overflow: 'hidden'
        }}
      >
        <LinearGradient
          style={[
            height ? { height } : null,
            {
              // width: 300,
              // position: 'relative',
              right: 0,
              top: 0
            }
            // marginBottom ? { marginBottom } : null,
            // center ? { alignItems: 'center' } : null
          ]}
          colors={['#ffa500', '#fa491f']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProgressBar;
