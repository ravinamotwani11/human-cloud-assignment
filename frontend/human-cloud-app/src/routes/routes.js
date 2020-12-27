import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter,
  browserHistory,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../containers/loginContainer/loginContainer";
import SignUp from "../containers/signupContainer/signUpContainer";
import UpdateProfile from "../containers/profileContainer/updateProfileContainer";
import AddProfile from "../containers/profileContainer/addProfileContainer";
import Home from "../containers/homeContainer/homeContainer";
import FundTransferSend from "../containers/fundTransfer/sendFund";
import FundTransferAdd from "../containers/fundTransfer/addFund";
import Transactions from "../containers/transactionsContainer/transactionContainer";

export const history = createBrowserHistory();

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Link to="/"></Link>

          <Route
            exact
            path="/"
            render={(props) => {
              return <Login {...props} />;
            }}
          ></Route>

          <Route
            exact
            path="/signup"
            render={(props) => {
              return <SignUp {...props} />;
            }}
          ></Route>

          <Route
            exact
            path="/updateProfile"
            render={(props) => {
              return <UpdateProfile {...props} />;
            }}
          ></Route>

          <Route
            exact
            path="/addProfile"
            render={(props) => {
              return <AddProfile {...props} />;
            }}
          ></Route>

          <Route
            exact
            path="/home"
            render={(props) => {
              return <Home {...props} />;
            }}
          ></Route>

          <Route
            exact
            path="/sendFund"
            render={(props) => {
              return <FundTransferSend {...props} />;
            }}
          ></Route>

<Route
            exact
            path="/addFund"
            render={(props) => {
              return <FundTransferAdd {...props} />;
            }}
          ></Route>

          <Route
            exact
            path="/transactions"
            render={(props) => {
              return <Transactions {...props} />;
            }}
          ></Route>

        </div>
      </Router>
    );
  }
}
