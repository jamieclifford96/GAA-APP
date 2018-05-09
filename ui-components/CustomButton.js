import React, { Component } from 'react'
import AppStyle from '../styles/AppStyle.js'

import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native'

class CustomButton extends Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

 render() {
   return (
        <TouchableOpacity  ref={component => this._root = component} {...this.props} style={AppStyle.button} onPress={this.props.onPress} >
        <Image
          source={require('../images/android-flat.png')}
          //source={{uri : this.props.source}}
          style={{ width: 40, height: 40 }}
        />
        <Text> {this.props.text} </Text>
        </TouchableOpacity>
    ) 
  }
}

export default CustomButton;

