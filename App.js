import React from 'react';
import { Button, View, Text,  } from 'react-native';
import { StackNavigator } from 'react-navigation';  
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import HomeScreen from './nav/HomeScreen.js'
import Fixtures from './nav/Fixtures.js'
import PlayerCards from './nav/PlayerCards.js'
import News from './nav/News.js'
import Lottery from './nav/Lottery.js'
import ContactUs from './nav/ContactUs.js'
import NewsDetails from './nav/NewsDetails.js'
import DetailsScreen from './nav/DetailsScreen.js'
import Shop from './nav/Shop.js'


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Fixtures : {
        screen : Fixtures,
    },
    PlayerCards : {
        screen : PlayerCards,
    },
    News : {
        screen : News,
    },
    Lottery : {
        screen : Lottery,
    },
    ContactUs: {
      screen: ContactUs,
    },
    NewsDetails: {
      screen: NewsDetails,
    },
    Shop: {
      screen: Shop,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2d504a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = 
    {
      group: "Test"
    };
  }

  render() {
    return(
      <RootStack/>
    );
  }
}