import React, { Component } from 'react';
import { Button, View, Text, Image, ImageBackground, ListView } from 'react-native';
import { groupBy } from 'lodash';
import AppStyle from '../styles/AppStyle.js'
//import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
//import RootView from  '../views/RootView.js'

class Fixtures extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let data = this.getLocalJson();

    //this.groupByDivision(data);
    
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };

    //this.getMoviesFromApiAsync();
  }

  static navigationOptions = {
    title : "Fixtures"
  }; 

  getLocalJson(){
    return require('../offline-data/fixtures.json');    
  }

  groupByDivision(data){
    let grouped = groupBy(data,(el) => el.group);
    console.log(grouped);
  }
  
  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.movies)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderRow(row){
      return(
        <View
          style={{
            flexDirection: 'column',
            //alignItems: 'center',
            margin :5,
            padding : 5,
            backgroundColor: 'rgba(39, 77, 78, 0.7)'
          }}>
          <Text style={AppStyle.fixtureItemText}>{row.group}</Text>  
          <View style={{ flexDirection: 'row'  }}>                          
            <Text style={AppStyle.fixtureItemText}>{row.home}</Text>  
            <Text style={AppStyle.fixtureItemText}>VS</Text>        
            <Text style={AppStyle.fixtureItemText}>{row.away}</Text>
          </View>
          <View style={{ flexDirection: 'row'  }}>  
          <Image source={require('../images/datetime.png')} style={AppStyle.fixtureIcon} />         
            <Text style={AppStyle.fixtureItemText}>{row.dateTime}</Text>
          </View>
          <View style={{ flexDirection: 'row'  }}>  
            <Image source={require('../images/venue.png')} style={AppStyle.fixtureIcon} />     
            <Text style={AppStyle.fixtureItemText}>{row.venue}</Text>
          </View>
        </View>
      );
  }

  render() {   

    return (
      <ImageBackground style={{
        flex: 2,
        alignItems: 'center',
      }} source={require('../images/background.png')}>
        <View style={AppStyle.view}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Fixtures;