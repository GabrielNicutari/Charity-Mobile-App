import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Spacer from './Spacer';
import BoldText from './BoldText';
import {
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';

const Fact = ({ item, index }) => {
  let icon = null;

  switch (index) {
    case 0:
      icon = <Entypo name="back-in-time" size={24} color="#333E63" />;
      break;
    case 1:
      icon = <Feather name="activity" size={24} color="#333E63" />;
      break;
    case 2:
      icon = <FontAwesome5 name="people-carry" size={24} color="#333E63" />;
      break;
    case 3:
      icon = <MaterialCommunityIcons name="finance" size={28} color="#333E63" />;
      break;
    default:
      icon = <MaterialIcons name="fact-check" size={24} color="#333E63" />;
      break;
  }

  return (
    <Spacer>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        {icon}
        <View style={styles.container}>
          <BoldText style={styles.text}>{item}</BoldText>
        </View>
      </View>
    </Spacer>
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

export default Fact;
