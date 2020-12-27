import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateProfile } from "../../action/profileAction";
import { profileService } from "../../services/profileService"

export class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            // email: "",
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

                        email: res.data.responseObject.emailAddress,

                    })
                }
            }
        )
    }
    // Yup validation
    _addProfileValidation = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address format"),
        phoneNumber: Yup.string()
            .required("Phone Number is required"),

    });

    // add button click
    _handleSubmit = (values) => {

        const firstName = values.firstName
        const lastName = values.lastName
        const email = values.email
        const phoneNumber = values.phoneNumber
        const country = values.country
        const state = values.state
        const city = values.city
        const pincode = values.pincode
        const userDetails = JSON.parse(localStorage.getItem("userData"));
        const userId = userDetails.userId;

        const profileBody = {

            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            emailAddress: email,
            country: country,
            state: state,
            city: city,
            pincode: pincode,
            userId: userId
        }

        //start add profile service call
        this.props.addProfileDetails(
            profileBody,
            (response) => {

                if (response.reasonCode === "200") {

                    
                    alert("Profile added successfully");
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
                    validationSchema={this._addProfileValidation}
                    onSubmit={this._handleSubmit}
                >
                    {({ touched, errors, values, setFieldValue }) => (
                        <Form>

                            <div class="col-lg-12">
                                <div class="row">
                                    <h2 style={{ padding: "10px" }}>Add Profile</h2>
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
                                    <div class="col-md-3">

                                        <button type="submit"
                                            style={{ width: "350px" }}
                                            className="btn btn btn-primary log-btn"
                                        > Save</button>
                                    </div>
                                    <div class="col-md-3">

                                        <button type="submit"
                                            style={{ width: "350px" }}
                                            className="btn btn btn-add log-btn"
                                            onClick={() => { this.props.history.push("/updateProfile") }}
                                        > Update</button>
                                    </div>



                                </div>



                            </div>
                        </Form>
                    )}
                </Formik>
<br/>
<br/>
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

export default AddProfile;