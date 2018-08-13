import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { NavigationActions } from 'react-navigation';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_AUTH_TOKEN,
    FACEBOOK_LOGIN_FAIL,
    AUTH_ERROR_RESET
} from './types';

export const tryLoginFacebook = () => async dispatch => {
    let token = await AsyncStorage.getItem(FACEBOOK_AUTH_TOKEN);
    if (token) {
        // console.log('ASYNC STORAGE TOKEN: ', token);
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
        NavigationActions.navigate({routeName: 'map'});
        console.log('first console navigated');
    } else {
        tryFacebookLogin(dispatch);
    }
};

export const resetErrorFacebook = () => {
    return {
        type: ERROR_RESET
    }
}


const tryFacebookLogin = async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('276683226448863', {
        permissions: ['public_profile']
    });
    if(type === 'cancel') {
        console.log('cancelled');
        return dispatch({type: FACEBOOK_LOGIN_FAIL})
    }

    await AsyncStorage.setItem(FACEBOOK_AUTH_TOKEN, token);
    // console.log("ACTION TOKEN: ", token);
    return dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token});
    // NavigationActions.navigate({routeName: 'map'});
    // console.log('second console navigated');
};