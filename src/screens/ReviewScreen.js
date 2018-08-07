import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import {Button} from 'react-native-elements';
import HeaderButton from '../components/HeaderButton';

export default class ReviewScreen extends Component {
  
  static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Review Jobs',
    headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
    },
    headerRight: (
      <Button 
      title={'Settings'} 
      onPress={() => navigation.navigate('settings')}
      backgroundColor='rgba(0,0,0,0)'
      color='rgba(0,122,255,1)' 
      />
    )
  });

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> lel1 </Text>
        <HeaderButton onPress={() => console.log('lol')}>Settings of mine</HeaderButton>
        <Text> lel2 </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}
