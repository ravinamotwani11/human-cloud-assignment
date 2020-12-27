import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateProfile } from "../../action/profileAction";
import { profileService } from "../../services/profileService"

export class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            country: "",
            state: "",
            city: "",
            pincode: ""

        };
        this._handleSubmit = this._handleSubmit.bind(this);

        this.initialState = this.state;
    }


    componentDidMount() {


        const userData = JSON.parse(localStorage.getItem("userData"));
        const userid = userData.userId;

        profileService.fetchProfileDetails(
            userid,
            (res) => {


                if (res.data.reasonCode === "200") {

                    this.setState({

                        firstName: res.data.responseObject.firstName,
                        lastName: res.data.responseObject.lastName,
                        email: res.data.responseObject.emailAddress,
                        phoneNumber: res.data.responseObject.phoneNumber,
                        country: res.data.responseObject.country,
                        state: res.data.responseObject.state,
                        city: res.data.responseObject.city,
                        pincode: res.data.responseObject.pincode
                    })
                }
            }
        )
    }


    // update profile button click
    _handleSubmit = (values) => {

        const firstName = values.firstName
        const lastName = values.lastName
        const email = values.email
        const country = values.country
        const state = values.state
        const city = values.city
        const pincode = values.pincode
        const userDetails = JSON.parse(localStorage.getItem("userData"));
        const userId = userDetails.userId;
        const profileBody = {

            firstName: firstName,
            lastName: lastName,
            emailAddress: email,
            country: country,
            state: state,
            city: city,
            pincode: pincode,
            userId: userId

        }

        //start update profile service call
        this.props.updateProfileDetails(
            profileBody,
            (response) => {

                if (response.reasonCode === "200") {


                    alert("Profile updated successfully");
                    window.location.reload();

                }
                else {

                    alert(response.reasonText)
                    this.setState(this.initialState);
                }
            },
            (error) => {
                console.log(error);
            }
        );
    };


    render() {

        return (
            <div>

                <Formik
                    enableReinitialize={true}
                    initialValues={{

                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        phoneNumber: this.state.phoneNumber,
                        country: this.state.country,
                        state: this.state.state,
                        city: this.state.city,
                        pincode: this.state.pincode

                    }}

                    onSubmit={this._handleSubmit}
                >
                    {({ touched, errors, values, setFieldValue }) => (
                        <Form>

                            <div class="col-lg-12">
                                <div class="row">
                                    <h2 style={{ padding: "10px" }}>Update Profile</h2>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <p>First Name</p>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            placeholder="Enter first name"
                                            maxLength="50"
                                            className="form-control"
                                            style={{ width: "850px" }}


                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="firstName"
                                            className="text-danger"
                                        />

                                    </div>
                                    <div class="col-md-6">
                                        <p>Last Name</p>
                                        <Field
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter Last name"
                                            maxLength="50"
                                            className="form-control"
                                            style={{ width: "850px" }}


                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="lastName"
                                            className="text-danger"
                                        />
                                    </div>
                                </div>

                                <br />

                                <div class="row">
                                    <div class="col-md-6">
                                        <p>Email Address</p>
                                        <Field
                                            type="text"
                                            name="email"
                                            disabled
                                            placeholder="Enter email address"
                                            maxLength="50"
                                            className="form-control"
                                            style={{ width: "850px" }}


                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="text-danger"
                                        />

                                    </div>

                                    <div class="col-md-6">
                                        <p>Phone Number</p>
                                        <Field
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            disabled
                                            maxLength="50"
                                            className="form-control"
                                            style={{ width: "850px" }}


                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="phoneNumber"
                                            className="text-danger"
                                        />
                                    </div>
                                </div>

                                <br />

                                <div class="row">
                                    <div class="col-md-6">
                                        <p>Country</p>
                                        <Field
                                            type="text"
                                            name="country"
                                            placeholder="Country"
                                            maxLength="50"
                                            className="form-control"
                                            style={{ width: "850px" }}


                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="country"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <p>State</p>
                                        <Field
                                            type="text"
                                            name="state"
                                            placeholder="State"
                                            maxLength="50"
                                            className="form-control"
                                            style={{ width: "850px" }}


                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="state"
                                            className="text-danger"
                                        />

                                    </div>
                                </div>

                                <br />

                                <div class="row">
                                    <div class="col-md-6">
                                        <p>City</p>
                                        <Field
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            maxLength="50"
                                            className="form-control"
                                            style={{ width: "850px" }}


                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="city"
                                            className="text-danger"
                                        />

                                    </div>
                                    <div class="col-md-6">
                                        <p>Pin Code</p>
                                        <Field
                                            type="text"
                                            name="pincode"
                                            placeholder="Pin Code"
                                            maxLength="50"
                                            className="form-control"
                                            style={{ width: "850px" }}


                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="pincode"
                                            className="text-danger"
                                        />

                                    </div>
                                </div>

                                <br />

                                <div class="row">
                                    <div class="col-md-6">
                                    </div>
                                    <div class="col-md-2">

                                        <button type="submit"
                                            style={{ width: "200px" }}
                                            className="btn btn btn-primary log-btn"
                                        > Update</button>
                                    </div>
                                    <div class="col-md-2">


                                        <button

                                            className="btn btn btn-add log-btn"
                                            style={{ width: "200px" }}
                                            onClick={() => { this.props.history.push("/addProfile") }}

                                        > Add </button>
                                    </div>

                                    <div class="col-md-2">


                                        <button
                                            type="button"

                                            className="btn btn btn-secondary log-btn"
                                            style={{ width: "200px" }}
                                            onClick={() => {

                                                const userData = JSON.parse(localStorage.getItem("userData"));
                                                const userId = 11;
                                                profileService.deleteProfileDetails(
                                                    userId,
                                                    (response) => {

                                                        if (response.data.reasonCode === "200") {

                                                            this.setState(this.initialState);
                                                            alert("Profile deleted successfully");
                                                            this.props.history.push("/")

                                                        }
                                                        else {

                                                            alert(response.reasonText)
                                                            this.setState(this.initialState);
                                                        }
                                                    },
                                                    (error) => {
                                                        console.log(error);
                                                    }
                                                );

                                            }}

                                        > Delete </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

                <div className="footer">
          <div className="row">
            <div className="col-md-4">
              <button type="button"
                onClick={() => { this.props.history.push("/home") }}
                style={{ width: "650px" }}
                className="btn btn btn-footer log-btn"
              > Home</button>
            </div>
            <div className="col-md-4">
              <button type="button"
                onClick={() => { this.props.history.push("/transactions") }}
                style={{ width: "650px" }}
                className="btn btn btn-footer log-btn"
              > Transactions</button>
            </div>
            <div className="col-md-4">
              <button type="button"
                onClick={() => { this.props.history.push("/addProfile") }}
                style={{ width: "650px" }}
                className="btn btn btn-footer log-btn"
              > Profile</button>
            </div>
          </div>
        </div>


            </div>





        );
    }
}

export default UpdateProfile;