import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import BoldText from './BoldText';
import RegularText from './RegularText';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Goal = ({ goal, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <Spacer>
      <TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
        <View style={styles.goalContainer}>
          <BoldText style={styles.text}>{goal}</BoldText>
          <Animatable.View
            style={{
              // position: 'absolute',
              // right: 15,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ rotate: '100deg' }]
            }}
            animation={{
              0: {
                rotate: open ? '0deg' : '-180deg'
              },
              1: {
                rotate: open ? '-180deg' : '0deg'
              }
            }}
            duration={300}
          >
            <MaterialCommunityIcons
              name="chevron-up-circle"
              size={32}
              // color="#71788E"
              style={{ color: open ? '#ff6a00' : '#71788E' }}
            />
          </Animatable.View>
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={!open}>
        <View style={[styles.descriptionContainer]}>
          <RegularText>{description}</RegularText>
        </View>
      </Collapsible>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    borderRadius: 25,
    minHeight: 45,
    backgroundColor: '#FAEFE9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20
  },
  descriptionContainer: {
    borderRadius: 25,
    backgroundColor: '#FAEFE9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 10
  },
  text: {
    color: '#ff6a00'
  }
});

export default Goal;
