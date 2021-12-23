import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const OrganisationCategory = ({ navigation, category }) => {
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
      >
        <View style={styles.container}>
          <Image source={category.image} style={styles.image} />

          <Text style={styles.text}>{category.name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#333E63',
    fontSize: 24,
    fontFamily: 'jakarta-bold'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360
  },
  image: {
    width: '100%',
    height: 350
  }
});

export default withNavigation(OrganisationCategory);
