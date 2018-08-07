import React, { Component } from 'react';
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: 'Welcome to JobFinder!', color: '#03A9F4' },
  { text: 'With our app you can easily find job nearby :)', color: '#009688'},
  { text: 'Set your location then swipe away!', color: '#03A9F4' }
];

export default class WelcomeScreen extends Component {
  
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides 
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}
