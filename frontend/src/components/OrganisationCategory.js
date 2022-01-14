import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  useWindowDimensions
} from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import BoldText from './BoldText';

const OrganisationCategory = ({ navigation, category }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            routeName: 'OrganisationList',
            params: {
              organisationCategory: category.name
            }
          })
        }
        delayPressIn={30}
      >
        <View style={[styles.container, { width }]}>
          <Image
            source={category.image}
            style={[styles.image, { width, resizeMode: 'contain' }]}
          />

          <View style={{ flex: 0.1 }}>
            <BoldText style={styles.text}>{category.name}</BoldText>
          </View>
        </View>
      </TouchableOpacity>
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

export default withNavigation(OrganisationCategory);
