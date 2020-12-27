
import {profileService } from '../services/profileService';

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const ADD_PROFILE_SUCCESS = 'ADD_PROFILE_SUCCESS';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS';

//FETCH PROFILE DETAILS
export function getProfileDetails(userData, fn) {

    return dispatch => {
      
        profileService.fetchProfileDetails(userData, (res) => {

            dispatch(getProfileDetailsSuccess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function getProfileDetailsSuccess(userdata) {
    return {
        type: GET_PROFILE_SUCCESS,
        payload: userdata
    }
}

//ADD PROFILE DETAILS
export function addProfileDetails(userData, fn) {

    return dispatch => {
      
        profileService.addProfileDetails(userData, (res) => {

            dispatch(addProfileDetailsSuccess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function addProfileDetailsSuccess(userdata) {
    return {
        type: ADD_PROFILE_SUCCESS,
        payload: userdata
    }
}

//UPDATE PROFILE DETAILS
export function updateProfileDetails(userData, fn) {

    return dispatch => {
      
        profileService.updateProfileDetails(userData, (res) => {

            dispatch(updateProfileDetailsSuccess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function updateProfileDetailsSuccess(userdata) {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: userdata
    }
}

//DELETE  PROFILE DETAILS
export function deleteProfileDetails(userData, fn) {

    return dispatch => {
      
        profileService.deleteProfileDetails(userData, (res) => {

            dispatch(deleteProfileDetailsSuccess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function deleteProfileDetailsSuccess(userdata) {
    return {
        type: DELETE_PROFILE_SUCCESS,
        payload: userdata
    }
}



