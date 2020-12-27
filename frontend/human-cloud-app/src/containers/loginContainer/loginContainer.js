import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login, oAuthLogin } from "../../action/loginAction";

import Login from "../../components/login/login";


const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: login,
oAuthLogin: oAuthLogin
    },
    dispatch
  );

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

const LoginContainer = connectFunction(
  class LoginContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
       
      }
    }


    render() {
      debugger
      return (
        <React.Fragment>
         
          
            <Login {...this.props} />
         
          
        </React.Fragment>
      );

    }
  }
);

export default LoginContainer;