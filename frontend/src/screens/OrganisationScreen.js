import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Linking,
  Text
} from 'react-native';
import CheckoutButton from '../components/CheckoutButton';
import { Ionicons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import RegularText from '../components/RegularText';
import Keyword from '../components/Keyword';
import ProgressBar from '../components/ProgressBar';
import BoldText from '../components/BoldText';
import Fact from '../components/Fact';
import ItalicText from '../components/BoldItalicText';
import SectionText from '../components/SectionText';
import ReadMore from 'react-native-read-more-text';
import Goal from '../components/Goal';

const OrganisationScreen = ({ navigation }) => {
  const organisation = navigation.getParam('organisation');

  const getHeader = () => {
    return (
      <>
        <ImageBackground
          style={{
            width: '100%',
            height: 260,
            borderRadius: 10,
            position: 'absolute',
            top: 0
          }}
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
            <Ionicons
              name="arrow-back"
              size={28}
              color="white"
              style={{
                textShadowColor: '#232c38',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
              }}
            />
          </TouchableOpacity>

          <BoldText
            style={{
              color: 'white',
              elevation: 2,
              zIndex: 2,
              position: 'absolute',
              bottom: 30,
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

        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: 235,
            backgroundColor: 'white'
          }}
        >
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

          <SectionText>Overview</SectionText>
          <Spacer>
            <ReadMore numberOfLines={6}>
              <RegularText>{organisation.overview}</RegularText>
            </ReadMore>
          </Spacer>

          <SectionText>Key Facts</SectionText>
        </View>
      </>
    );
  };

  const getFooter = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <SectionText>Our Mission</SectionText>

        <FlatList
          data={organisation.goals}
          renderItem={({ item }) => {
            return <Goal goal={item.goal} description={item.description} />;
          }}
          keyExtractor={(item) => item.goal}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ backgroundColor: 'white' }}
        />

        <Spacer>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.worldwildlife.org/')}
          >
            <ItalicText>Visit the organisation`s website</ItalicText>
          </TouchableOpacity>
        </Spacer>

        <SectionText>Gallery</SectionText>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={organisation.facts}
        renderItem={({ item, index }) => {
          return <Fact item={item} index={index} />;
        }}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={getHeader}
        ListFooterComponent={getFooter}
        contentContainerStyle={{ backgroundColor: 'white' }}
      />

      <CheckoutButton organisation={organisation} />
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
