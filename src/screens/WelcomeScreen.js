import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import Slides from "../components/Slides";
import {AppLoading} from 'expo';

import { FACEBOOK_AUTH_TOKEN } from '../actions/types';

const SLIDE_DATA = [
  { text: 'Welcome to JobFinder!', color: '#03A9F4' },
  { text: 'With our app you can easily find job nearby :)', color: '#009688'},
  { text: 'Set your location then swipe away!', color: '#03A9F4' }
];

export default class WelcomeScreen extends Component {
  
  state = {
    isAppReady: false,
    userToken: null
  }
  async componentWillMount() {
    let token = await AsyncStorage.getItem(FACEBOOK_AUTH_TOKEN);
    if(token) {
      this.setState({
        isAppReady: true,
        userToken: token
      });
      this.props.navigation.navigate('map');
    } else {
      this.setState({isAppReady: true});
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if(!this.state.isAppReady && this.state.token == null) {
      return <AppLoading/>
    }
    return (
      <Slides 
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}
