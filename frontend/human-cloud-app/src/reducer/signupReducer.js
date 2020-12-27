import {
    USERS_SIGNUP_SUCCESS
    
  } from "../action/signupAction";
  
  const initialState = {
    userData: [],
  };
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {

      case USERS_SIGNUP_SUCCESS:
      
        return {
          ...state,
          userData: action.payload,
          pending: false,
        };
    
      default:
        return state;
    }
  };
  
  export default signUpReducer;
  
  export const getSignUpData = (state) => state.userData;
//   export const getSignUpData = (state) => ({
//     userData: state.signUpReducer,
//     // pending: state.signUpReducer,
 
//  })
  