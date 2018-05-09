import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';

class BackgroundTheme extends React.Component{
    render(){
        return (
        <ImageBackground style={{
            flex: 2,
            alignItems: 'center',
        }} source={require('../images/background.png')}>
            {this.props.children}
            <Image style={{ width: 131, height: 30, alignSelf: 'flex-end', padding : 10 }} source={require('../images/ericsson-logo.png')} />
        </ImageBackground>
        );
    }
}

export default BackgroundTheme;