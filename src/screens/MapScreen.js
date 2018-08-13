import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import {MapView} from 'expo';
//import {FACEBOOK_AUTH_TOKEN} from '../actions/types';

export default class MapScreen extends Component {
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView 
          style={{ flex: 1 }} 
          initialRegion={this.state.region}
        />
      </View>
    );
  }
}
