import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    AUTH_ERROR_RESET
} from '../actions/types';

const INITIAL_STATE = {
    token: null,
    authError: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return {...state, token: action.payload, authError: false};
        case FACEBOOK_LOGIN_FAIL:
            return {...state, authError: true, token: null};
        case AUTH_ERROR_RESET: 
            return {...state, authError: false};
        default:
            return state;
    }
}