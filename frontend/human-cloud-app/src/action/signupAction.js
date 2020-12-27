
import { signupService } from '../services/signupService';

export const USERS_SIGNUP_SUCCESS = 'USERS_SIGNUP_SUCCESS';


export function signup(userData, fn) {

    return dispatch => {
      
        signupService.signup(userData, (res) => {

            dispatch(signupSucess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function signupSucess(userData) {
    return {
        type: USERS_SIGNUP_SUCCESS,
        payload: userData
    }
}



