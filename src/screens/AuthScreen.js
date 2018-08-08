import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';

import {tryLoginFacebook, resetErrorFacebook} from '../actions';
//import {FACEBOOK_AUTH_TOKEN} from '../actions/types';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.tryLoginFB();
    //AsyncStorage.removeItem(FACEBOOK_AUTH_TOKEN);
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete = (props) => {
    const {navigate} = this.props.navigation;
    if(props.token) {
      navigate('map');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
        
        title='Try again!' 
        onPress={() => this.props.tryLoginFB()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { 
    token: state.authData.token,
    authError: state.authData.authError
  };
};


const mapDispatchToProps = dispatch => {
  return {
    tryLoginFB: () => dispatch(tryLoginFacebook()),
    resetError: () => dispatch(resetErrorFacebook())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  // tryAgainBtn: {
  //   backgroundColor: 'green'
  // }
});