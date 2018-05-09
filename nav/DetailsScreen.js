import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import AppStyle from '../styles/AppStyle.js'

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
      
      return {
        title: params ? params.otherParam : 'A Nested Details Screen',
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
  
    render() {
      /* 2. Read the params from the navigation state */
      const { params } = this.props.navigation.state;
      const itemId = params ? params.itemId : null;
      const otherParam = params ? params.otherParam : null;
  
      return (
        <View style={AppStyle.view}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
          <Button
            title="Update the title"
            onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
          />
        </View>
      );
    }
  }

  export default DetailsScreen;