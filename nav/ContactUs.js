import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
//import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/android-flat.png')}
        style={{ width: 40, height: 40 }}
      />
    );
  }
}

class ContactUs extends React.Component {
  static navigationOptions = {
    title : "Contact Us"
  };

  render() {

    return (
      <BackgroundTheme>
        <View style={AppStyle.view}>
          <Text>Contact Us</Text>
        </View>
      </BackgroundTheme>
    );
  }
}

export default ContactUs;