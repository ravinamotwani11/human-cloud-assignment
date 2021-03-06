import React, { Component } from "react";

import GoogleLogin from "react-google-login";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CLIENT_ID = "163906437156-k33v648bsc8a4p8dc96lmju6l0epqdud.apps.googleusercontent.com";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",

    };
    this._handleSubmit = this._handleSubmit.bind(this);

    this.initialState = this.state;
  }

  // Yup validation

  _loginSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Enter password with minimum 8 numbers of combination of alphabates, number, special character')
      .max(16, 'Enter password with maximum 16 numbers of combination of alphabates, number, special character')
      .matches(/[a-z]/, 'At least 1 character should be Uppercase')
      .matches(/[A-Z]/, 'At least 1 character should be Lowercase')
      .matches(/(?=.*\d)/, 'Must contain a number.')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain special character')
      .matches(/^\S*$/, 'Password should not allowed whitespace'),
  });

  // Login button click
  _handleSubmit = (values) => {

    const emailAddress = values.emailAddress
    const password = values.password
    const userBody = {

      emailAddress: emailAddress,
      password: password,

    }

    //start login service call
    this.props.signup(
      userBody,
      (response) => {

        if (response.reasonCode === "200") {
          var userData = JSON.stringify(response.responseObject);
          this.setState(this.initialState);
          //   const userId = userData.userId;
          localStorage.setItem("userData", userData);
          //   const userDetails = JSON.parse(localStorage.getItem('userData'));
          //   const consent = userDetails.consent;

          this.props.history.push("/home");


          this.setState(this.initialState);

        }
        else {
          //   warning(
          //     "Email or Password did not match.",
          //     warningNotification
          //   );
          alert("User already exists!!")
          this.setState(this.initialState);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  _passwordPolicy() {
    document.getElementById("passwordPolicy").classList.toggle("show");
  }
  _passwordPolicyHide() {
    document.getElementById("passwordPolicy").classList.toggle("show", false);
  }
  responseGoogle = (response) => {
    
    const emailAddress = response.profileObj.email;
    const email = {
      emailAddress: emailAddress
    }
    this.props.oAuthLogin(
      email,
      (response) => {

        if (response.reasonCode === "200") {
          var oAuthUserData = JSON.stringify(response.responseObject);
          this.setState(this.initialState);

          localStorage.setItem("userData", oAuthUserData);
          const userDetails = JSON.parse(localStorage.getItem('userData'));

          this.props.history.push("/home");

          this.setState(this.initialState);

        }
        else {
          alert("Something wents wrong!")
          this.setState(this.initialState);
        }
      },
      (error) => {
        console.log(error);
      }
    );

  }
  render() {
    return (
      <div>


<div 
 style={{backgroundColor:"lightblue"}}
>



        {/* <div className="log-logo">Human Cloud</div> */}
        <Formik
          enableReinitialize={true}
          initialValues={{
            emailAddress: this.state.emailAddress,
            password: this.state.password

          }}
          validationSchema={this._loginSchema}
          onSubmit={this._handleSubmit}
        >
          {({ touched, errors, values, setFieldValue }) => (
            <Form>
           
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                          <div class="row" style={{height :"150px"}}>
                          </div>
                         
                          <br />
                          <div className="row" >
                      
                      <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="SIGN IN WITH GOOGLE"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    
                    <br />
                    <br />
                  </div>
                          <div class="row">
                          <label htmlFor="inputUsernameEmail">Email</label>
                          <Field
                            type="email"
                            name="emailAddress"
                            placeholder="Email"
                            maxLength="50"
                            style={{width:"350px"}}
                            class="form-control"
                         />
                          <ErrorMessage
                            component="div"
                            name="emailAddress"
                            className="text-danger"
                          /></div>
                        
                        <br />
                       
                          <div class="row">
                          <label htmlFor="inputPassword">Password &nbsp;</label>

                          <i className="fa fa-info-circle" id="tooltip-icon1" aria-hidden="true"
                            data-toggle="modal" data-target="#passwordPolicy"
                            onClick={() => {
                              this._passwordPolicy()
                            }}
                          ></i>
                          
                          <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            maxLength="50"
                            class="form-control"
                            style={{width:"350px"}}
                           

                          />
                          <ErrorMessage
                            component="div"
                            name="password"
                            className="text-danger"
                          /></div>

                      

                        <br />
                        <div class="row">
                        
                          
                      <button type="submit"
                       style={{width:"350px"}}
                        className="btn btn btn-primary log-btn"
                      >Sign Up</button>
                        </div>
                        <br />
                        <div class="row">
                        
                          <div class="col-md-12">
                            <span>Already have a account?<a href="" onClick={() => { this.props.history.push("/") }}>Sign In</a></span>
                          </div>
                      
                        </div>
                      </div>
                      
                      <div class="col-md-4">
                      </div>
                    </div>
                    </div>
                
                </Form>
              )}
            </Formik>
</div>

              
              <div className="modal fade" id="passwordPolicy" role="dialog">
                <div className="modal-dialog">

                  <div className="modal-content">
                    <div className="modal-header modalheader">
                      <button type="button" className="close" data-dismiss="modal" id="modalclose"
                        onClick={this._passwordPolicyHide}
                      >&times;</button>
                      <b>Password Policy</b>
                      <div>
                        <ol type="1">
                          <li>At least 1 character should be Capital['A-Z']</li>
                          <li>At least 1 character should be Small['a-z']</li>
                          <li>At least 1 character should be Numeric['0-9']</li>
                          <li>
                            At least 1 character should be special
                  character ['!@#$%^&*(),.?:{ }|']
                </li>
                          <li>At least 8 character should be there</li>
                          <li>Maximum 16 character should be there</li>
                          <li>No space allowed [ ]</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      
            
      
          );
  }
}

export default SignUp
