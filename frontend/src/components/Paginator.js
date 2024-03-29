import React from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';

const Paginator = ({
  data,
  scrollX,
  position,
  bottom,
  color,
  borderColor,
  borderWidth
}) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 64,
        alignItems: 'center',
        position: position,
        bottom: bottom
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp'
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp'
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
                backgroundColor: color ? color : '#333E63',
                borderColor: borderColor,
                borderWidth: borderWidth
              }
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333E63',
    marginHorizontal: 8
  }
});

export default Paginator;
