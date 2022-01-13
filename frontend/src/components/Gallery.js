import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Animated,
  useWindowDimensions
} from 'react-native';
import Spacer from './Spacer';
import BoldText from './BoldText';
import OrganisationCategory from './OrganisationCategory';
import Paginator from './Paginator';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View>
        <FlatList
          data={images}
          renderItem={({ item }) => {
            return (
              <Image
                source={{ uri: item }}
                style={{
                  width: width,
                  resizeMode: 'cover'
                }}
              />
            );
          }}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }
            ],
            {
              useNativeDriver: false
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator
        data={images}
        scrollX={scrollX}
        position="absolute"
        bottom={-10}
        color="#ff6a00"
        borderWidth={1.5}
        borderColor="#FAEFE9"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    minHeight: 45,
    backgroundColor: '#FAEFE9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    flex: 1
  },
  text: {
    color: '#ff6a00'
  }
});

export default Gallery;
