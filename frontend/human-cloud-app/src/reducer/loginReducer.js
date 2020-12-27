
import { USERS_LOGIN_SUCCESS, USERS_LOGIN_REQUEST, USERS_LOGIN_OAUTH_SUCCESS} from '../action/loginAction';

const userdata = localStorage.getItem('userData') == "" ? "" : JSON.parse(localStorage.getItem('userData'))

const initialState = {

   pending: false,
   user: userdata ? userdata : [],
   oAuthUser: []
}

const loginReducer = (state = initialState, action) => {
   switch (action.type) {
       
       case USERS_LOGIN_REQUEST:
           return {
               ...state,
               pending: true,
           }
   
       case USERS_LOGIN_SUCCESS:
          return {
               ...state,
               pending: false,
               user: action.payload
           }
    
        case USERS_LOGIN_OAUTH_SUCCESS:
           return {
                ...state,
                pending: false,
                oAuthUser: action.payload
            }

       default:
           return state;
   }
}
export default loginReducer;
export const getLogin = (state) => ({
   user: state.loginReducer,
   pending: state.loginReducer,
   oAuthUser: state.loginReducer
})
