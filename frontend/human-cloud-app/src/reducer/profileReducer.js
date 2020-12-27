import {
    GET_PROFILE_SUCCESS,
    ADD_PROFILE_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
    DELETE_PROFILE_SUCCESS,

} from "../action/profileAction";

const initialState = {

    addProfileData: [],
    updateProfileData: [],
    getProfileData: [],
    deleteProfileData: [],

};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                getProfileData: action.payload,

            };


        case ADD_PROFILE_SUCCESS:
            return {
                ...state,
                addProfileData: action.payload,

            };

        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                updateProfileData: action.payload,

            };

        case DELETE_PROFILE_SUCCESS:
            return {
                ...state,
                deleteProfileData: action.payload,

            };


        default:
            return state;
    }
};

export default ProfileReducer;

export const getProfileData = (state) => state.getProfileData;
export const addProfileData = (state) => state.addProfileData;
export const updateProfileData = (state) => state.updateProfileData;
export const deleteProfileData = (state) => state.deleteProfileData;


