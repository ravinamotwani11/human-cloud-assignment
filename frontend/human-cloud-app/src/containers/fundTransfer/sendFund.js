import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFundDetails, addFundDetails, sendFundDetails,addFundInRecieverDetails } from "../../action/transactionAction";
import {getFundData, addFundData, sendFundData, addFundInRecieverData} from "../../reducer/transactionReducer";

import SendFund from "../../components/fundTransfer/fundTransfer";


const mapStateToProps = (state) => ({

    addFund: addFundData(state.transactionReducer),
    sendFund: sendFundData(state.transactionReducer),
    getFund: getFundData(state.transactionReducer),
    addFundInReciever: addFundInRecieverData(state.transactionReducer),
   

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFundDetails: getFundDetails,
      addFundDetails: addFundDetails,
      sendFundDetails: sendFundDetails,
      addFundInRecieverDetails: addFundInRecieverDetails

    },
    dispatch
  );

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

const TransactionContainer = connectFunction(
  class TransactionContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
       
      }
    }


    render() {
      
      return (
        <React.Fragment>
         
          
            <SendFund {...this.props} />
         
          
        </React.Fragment>
      );

    }
  }
);

export default TransactionContainer;