import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {transactionService} from "../../services/transactionService";

export class FundTransfer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: "",
      phoneNumber: "",
      amount: ""

    };

    this.initialState = this.state;
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  // Yup validation
  _fundValidation = Yup.object().shape({

    phoneNumber: Yup.string()
      .required("Phone Number is required"),
    amount: Yup.string()
      .required("Amount is required"),

  });

  // fund button click
  _handleSubmit = (values) => {
debugger
    const phoneNumber = values.phoneNumber
    const amount = values.amount
    const description = values.description

    const userDetails = JSON.parse(localStorage.getItem("userData"));
    const userId = userDetails.userId;


    const fundBody = {

      amount: amount,
      description: description,
      phoneNumber: phoneNumber,
      userId: userId
    }

  const emailNotification = userDetails.emailAddress


    //wallet service call
    this.props.sendFundDetails(
      fundBody,
      (response) => {

        if (response.reasonCode === "200") {


          alert("Fund sent successfully");
          window.location.reload();

          transactionService.sendNotification(
            emailNotification,
            (response) => {

              if (response=="mail has been sent check your inbox!") {
                alert("email sent successfully");
              }
              else{
                alert("something wents wrong");
              }
            }
          )

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

            description: this.state.description,
            phoneNumber: this.state.phoneNumber,
            amount: this.state.amount,

          }}
          validationSchema={this._fundValidation}
          onSubmit={this._handleSubmit}
        >
          {({ touched, errors, values, setFieldValue }) => (
            <Form>

              <div class="row">
                <div class="col-md-4">
                  <p>Phone Number</p>
                </div>
                <div class="col-md-4">
                  <Field
                    type="text"
                    name="phonenumber"
                    placeholder="Phone number"
                    maxLength="50"
                    style={{ width: "350px" }}
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="phonenumber"
                    className="text-danger"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <p>Amount</p>
                </div>
                <div class="col-md-4">
                  <Field
                    type="text"
                    name="amount"
                    placeholder="Amount in INR"
                    maxLength="50"
                    style={{ width: "350px" }}
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="amount"
                    className="text-danger"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <p>Description</p>
                </div>
                <div class="col-md-4">
                  <Field
                    type="text"
                    name="description"
                    placeholder="Description"
                    maxLength="50"
                    style={{ width: "350px" }}
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="description"
                    className="text-danger"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                  <button type="submit"
                    style={{ width: "350px" }}
                    className="btn btn btn-primary log-btn"
                  > Send Fund</button>
                  <br/>
                  <br/>
                  <button type="button"
                    style={{ width: "350px" }}
                    className="btn btn btn-secondary log-btn"
                    onClick={() => { this.props.history.push("/home") }}
                  > Cancel</button>
                </div>

              </div>

            </Form>
          )}
        </Formik>

      </div>


    );
  }
}
export default FundTransfer;
