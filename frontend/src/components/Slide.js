import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  useWindowDimensions
} from 'react-native';
import BoldText from './BoldText';
import RegularText from './RegularText';

const Slide = ({ slide }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <View delayPressIn={30}>
        <View style={[styles.container, { width }]}>
          <Image
            source={slide.image}
            style={[styles.image, { width, resizeMode: 'contain' }]}
          />

          <View style={{ flex: 0.1, alignItems: 'center' }}>
            <BoldText style={styles.text}>{slide.name}</BoldText>

            <View style={{ maxWidth: 250 }}>
              <RegularText center style={{ fontSize: 11 }}>
                {slide.description}
              </RegularText>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 40
  },
  image: {
    flex: 0.6,
    justifyContent: 'center'
  }
});

export default Slide;
