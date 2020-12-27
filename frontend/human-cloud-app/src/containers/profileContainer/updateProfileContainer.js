import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProfileDetails, updateProfileDetails, deleteProfileDetails } from "../../action/profileAction";
import {getProfileData, updateProfileData, deleteProfileData} from "../../reducer/profileReducer";

import UpdateProfile from "../../components/profile/updateProfile";


const mapStateToProps = (state) => ({

    getProfileData: getProfileData(state.profileReducer),
    upadteProfileData: updateProfileData(state.profileReducer),
    deleteProfileData: deleteProfileData(state.profileReducer),

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        getProfileDetails: getProfileDetails,
        updateProfileDetails: updateProfileDetails,
        deleteProfileDetails: deleteProfileDetails

    },
    dispatch
  );

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

const UpdateProfileContainer = connectFunction(
  class UpdateProfileContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
       
      }
    }


    render() {
      debugger
      return (
        <React.Fragment>
         
          
            <UpdateProfile {...this.props} />
         
          
        </React.Fragment>
      );

    }
  }
);

export default UpdateProfileContainer;