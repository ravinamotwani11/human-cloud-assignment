import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import loginReducer from "../reducer/loginReducer";
import signUpReducer from "../reducer/signupReducer";
import profileReducer from "../reducer/profileReducer";
import transactionReducer from "../reducer/transactionReducer";

const loggerMiddleware = createLogger();
export default createStore(
  combineReducers({
    loginReducer,
    signUpReducer,
    profileReducer,
    transactionReducer

  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
