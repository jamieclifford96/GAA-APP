import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity, ImageBackground, Picker } from 'react-native';
//import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import BackgroundTheme from '../views/BackgroundTheme.js'
import AppStyle from '../styles/AppStyle.js'

//class LogoTitle extends React.Component {
//  render() {
//    return (
//      <Image
//        source={require('../images/android-flat.png')}
//        style={{ width: 40, height: 40 }}
//      />
//    );
//  }
//}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupkey : "Group 1",
      group: "G1"
    };
  }

  static navigationOptions = {
    //headerTitle: <LogoTitle />,
    headerRight: (
      <Picker
        //selectedValue={"Group 1"}
        style={{ 
          height: 30, 
          width: 100 ,
          color: "#fff",}
        }
        onValueChange={(itemValue, itemIndex) => this.setState({group: itemValue})}>
        <Picker.Item label="Group 1" value="G1" />
        <Picker.Item label="Group 2" value="G2" />
        <Picker.Item label="Group 3" value="G3" />
        <Picker.Item label="Group 4" value="G4" />
      </Picker>
    ),
  };

  static navigationOptions = {
    tabBarVisible : true
  };

  render() {
    return (
        <BackgroundTheme>
          <View style={AppStyle.view}>   

            {/* Fixture Button */}
            <TouchableOpacity 
              style={AppStyle.buttonContainer} 
              activeOpacity={0.5}
              onPress={() => { this.props.navigation.navigate('Fixtures'); }}> 
              <Image source={require('../images/fixture-white.png')} style={AppStyle.buttonImage} /> 
              <Text style={AppStyle.buttonText}> Fixtures </Text> 
            </TouchableOpacity>   
                
            {/* Player Cards button 
            <TouchableOpacity 
              style={AppStyle.buttonContainer} 
              activeOpacity={0.5}
              onPress={() => { this.props.navigation.navigate('PlayerCards'); }}> 
              <Image source={require('../images/card.png')} style={AppStyle.buttonImage} /> 
              <Text style={AppStyle.buttonText}> Player Cards </Text> 
            </TouchableOpacity>   */}
                
            {/* News Button */}
            <TouchableOpacity 
              style={AppStyle.buttonContainer} 
              activeOpacity={0.5}
              onPress={() => { this.props.navigation.navigate('News'); }}> 
              <Image source={require('../images/newspaper.png')} style={AppStyle.buttonImage} /> 
              <Text style={AppStyle.buttonText}> News </Text> 
            </TouchableOpacity>   
                
            {/* Shop Button */}
            <TouchableOpacity 
              style={AppStyle.buttonContainer} 
              activeOpacity={0.5}
              onPress={() => { this.props.navigation.navigate('Shop'); }}> 
              <Image source={require('../images/shopping-cart.png')} style={AppStyle.buttonImage} /> 
              <Text style={AppStyle.buttonText}> Club Gear </Text> 
            </TouchableOpacity>
                
            {/* Lottery Button */}
            <TouchableOpacity 
              style={AppStyle.buttonContainer} 
              activeOpacity={0.5}
              onPress={() => { this.props.navigation.navigate('Lottery'); }}> 
              <Image source={require('../images/lottery.png')} style={AppStyle.buttonImage} /> 
              <Text style={AppStyle.buttonText}> Lottery </Text> 
            </TouchableOpacity>  
                
            {/* Contact Us Button */}
            <TouchableOpacity 
              style={AppStyle.buttonContainer} 
              activeOpacity={0.5}
              onPress={() => { this.props.navigation.navigate('ContactUs'); }}> 
              <Image source={require('../images/mail.png')} style={AppStyle.buttonImage} /> 
              <Text style={AppStyle.buttonText}> Contact Us </Text> 
            </TouchableOpacity>  
                
            {/* Details with params Button */}
            {/*<TouchableOpacity 
              style={AppStyle.buttonContainer} 
              activeOpacity={0.5}
              onPress={() => { this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
              }); }}> 
              <Image source={require('../images/fixture-white.png')} style={AppStyle.buttonImage} /> 
              <Text style={AppStyle.buttonText}> Details </Text> 
            </TouchableOpacity>*/}

          </View>
        </BackgroundTheme>
    );
  }
}

export default HomeScreen;