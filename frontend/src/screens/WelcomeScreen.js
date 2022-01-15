import React, { useContext, useRef, useState } from 'react';
import { View, StyleSheet, Animated, FlatList } from 'react-native';
import Paginator from '../components/Paginator';
import Payment from '../../assets/online-payments.png';
import WelcomeOnboard from '../../assets/welcome-onboard.png';
import Explore from '../../assets/explore.png';
import Slide from '../components/Slide';
import NextButton from '../components/NextButton';
import { Context as AuthContext } from '../context/AuthContext';

const slides = [
  {
    id: 1,
    name: 'Welcome Onboard',
    description:
      'We are happy to see you join us. Let us put our hands together for a better tomorrow.',
    image: WelcomeOnboard
  },
  {
    id: 2,
    name: 'Explore Various Organisations',
    description:
      'We provide you with a plethora of organisations, each showcasing their mission. Feel free to join in their fight',
    image: Explore
  },
  {
    id: 3,
    name: 'Quick & Easy Payments',
    description:
      'Make an impact in a simple and intuitive way in the span of a few seconds.',
    image: Payment
  }
  // { id: 4, name: 'Security', image: '' },
  // { id: 5, name: 'Promotions', image: '' }
];

const WelcomeScreen = () => {
  const { finishOnboarding } = useContext(AuthContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      finishOnboarding();
    }
  };

  return (
    <View style={styles.screen}>
      <View style={{ flex: 0.75 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => {
            return <Slide slide={item} />;
          }}
          keyExtractor={(item) => item.id}
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

      <Paginator data={slides} scrollX={scrollX} />

      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
};

WelcomeScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default WelcomeScreen;
