import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addProfileDetails } from "../../action/profileAction";
import {addProfileData} from "../../reducer/profileReducer";

import AddProfile from "../../components/profile/addProfile";


const mapStateToProps = (state) => ({

    addProfileData: addProfileData(state.profileReducer),
   

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        addProfileDetails: addProfileDetails 

    },
    dispatch
  );

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

const AddProfileContainer = connectFunction(
  class AddProfileContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
       
      }
    }


    render() {
      
      return (
        <React.Fragment>
         
          
            <AddProfile {...this.props} />
         
          
        </React.Fragment>
      );

    }
  }
);

export default AddProfileContainer;