import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CheckoutButton from '../components/CheckoutButton';
import { Ionicons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import RegularText from '../components/RegularText';
import Keyword from '../components/Keyword';
import ProgressBar from '../components/ProgressBar';
import BoldText from '../components/BoldText';
import HistoryItem from '../components/HistoryItem';
import ItalicText from '../components/BoldItalicText';

const OrganisationScreen = ({ navigation }) => {
  const organisation = navigation.getParam('organisation');

  const getHeader = () => {
    return (
      <>
        <ImageBackground
          style={{ width: '100%', height: 250, borderRadius: 10 }}
          source={{
            uri: `${organisation.bannerImage}`
          }}
          // blurRadius={1.5}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginLeft: 20,
              position: 'absolute',
              top: 40
            }}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>

          <BoldText
            style={{
              color: 'white',
              elevation: 2,
              zIndex: 2,
              position: 'absolute',
              bottom: 10,
              left: 20,
              fontSize: 32,
              textShadowColor: '#232c38',
              textShadowOffset: { width: -1, height: 2 },
              textShadowRadius: 20
            }}
          >
            {organisation.name}
          </BoldText>
        </ImageBackground>

        <Spacer>
          <ItalicText>{organisation.motto}</ItalicText>
        </Spacer>

        <FlatList
          data={organisation.keywords}
          horizontal
          renderItem={({ item }) => {
            return <Keyword keyword={item} />;
          }}
          keyExtractor={(item) => item}
          style={{ paddingLeft: 20 }}
          showsHorizontalScrollIndicator={false}
        />

        <Spacer>
          <BoldText style={styles.sectionTitle}>Progress</BoldText>

          <ProgressBar
            step={organisation.totalProgress ? organisation.totalProgress : 10}
            steps={organisation.monthlyGoal ? organisation.monthlyGoal : 11}
            height={10}
          />

          <RegularText style={styles.text}>
            Monthly Goal:&nbsp;
            <BoldText style={{ color: '#FF8900', fontSize: 16 }}>
              {organisation.totalProgress}
            </BoldText>
            <RegularText style={{ fontSize: 16 }}>&nbsp;/&nbsp;</RegularText>
            <BoldText style={{ color: '#FF8900', fontSize: 16 }}>
              {organisation.monthlyGoal}
            </BoldText>
          </RegularText>
        </Spacer>

        <Spacer>
          <BoldText style={styles.sectionTitle}>Overview</BoldText>

          <RegularText>{organisation.overview}</RegularText>
        </Spacer>
      </>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={organisation.history}
        renderItem={({ item }) => {
          return <HistoryItem item={item} />;
        }}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={getHeader}
        // ListFooterComponent={getFooter}
      />

      <CheckoutButton />
    </View>
  );
};

OrganisationScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10
  },
  text: {
    marginTop: 10
  }
});

export default OrganisationScreen;
