import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SignUp from "../../components/signup/signup";
import { oAuthLogin } from "../../action/loginAction";
import {signup} from "../../action/signupAction";


const mapStateToProps = (state) => ({


});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        signup: signup,
        oAuthLogin: oAuthLogin
    },
    dispatch
  );

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

const SignUpContainer = connectFunction(
  class SignUpContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
       
      }
    }


    render() {
      debugger
      return (
        <React.Fragment>
         
        
            <SignUp {...this.props} />
            
          
        </React.Fragment>
      );

    }
  }
);

export default SignUpContainer;