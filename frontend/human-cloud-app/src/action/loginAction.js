
import { loginService } from '../services/loginService';
export const USERS_LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
export const USERS_LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';

export const USERS_LOGIN_OAUTH_SUCCESS = 'USERS_LOGIN_OAUTH_SUCCESS';


export function loginpending() {
    return {
        type: USERS_LOGIN_REQUEST
    }
}

export function login(userData, fn) {

    return dispatch => {
        dispatch(loginpending());
        loginService.login(userData, (res) => {

            dispatch(loginSucess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function loginSucess(userdata) {
    return {
        type: USERS_LOGIN_SUCCESS,
        payload: userdata
    }
}


export function oAuthLogin(userInfo, fn) {

    return dispatch => {
    
        loginService.oAuthSignIn(userInfo, (res) => {

            dispatch(oAuthSuccess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function oAuthSuccess(userInfo) {
    return {
        type: USERS_LOGIN_OAUTH_SUCCESS,
        payload: userInfo
    }
}


