import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UploadFile from "../../components/uploadFileComponent/uploadFile";


const mapStateToProps = (state) => ({



});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {


    },
    dispatch
  );

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

const UploadFileContainer = connectFunction(
  class UploadFileContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
       
      }
    }


    render() {
      debugger
      return (
        <React.Fragment>
         
          
            <UploadFile {...this.props} />
         
          
        </React.Fragment>
      );

    }
  }
);

export default UploadFileContainer;