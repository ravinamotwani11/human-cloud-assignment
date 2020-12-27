
import {transactionService } from '../services/transactionService';

export const GET_FUND_SUCCESS = 'GET_FUND_SUCCESS';
export const ADD_FUND_SUCCESS = 'ADD_FUND_SUCCESS';
export const SEND_FUND_SUCCESS = 'SEND_FUND_SUCCESS';
export const ADD_FUND_IN_RECIEVER_SUCCESS = 'ADD_FUND_IN_RECIEVER_SUCCESS';

//FETCH FUND DETAILS
export function getFundDetails(fund, fn) {

    return dispatch => {
      
        transactionService.getFund(fund, (res) => {

            dispatch(getFundDetailsSuccess(JSON.stringify(res.responseListObject)));
            fn(res.data)
        });
    };
}

export function getFundDetailsSuccess(fund) {
    return {
        type: GET_FUND_SUCCESS,
        payload: fund
    }
}

//ADD FUND DETAILS
export function addFundDetails(fund, fn) {

    return dispatch => {
      
        transactionService.addFund(fund, (res) => {

            dispatch(addFundDetailsSuccess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function addFundDetailsSuccess(fund) {
    return {
        type: ADD_FUND_SUCCESS,
        payload: fund
    }
}

//SEND FUND DETAILS
export function sendFundDetails(fund, fn) {

    return dispatch => {
      
        transactionService.sendFund(fund, (res) => {

            dispatch(sendFundDetailsSuccess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function sendFundDetailsSuccess(fund) {
    return {
        type: SEND_FUND_SUCCESS,
        payload: fund
    }
}
//ADD FUND IN RECIEVER DETAILS
export function addFundInRecieverDetails(fund, fn) {

    return dispatch => {
      
        transactionService.addFundInRecieverWallet(fund, (res) => {

            dispatch(addFundInRecieverDetailsSuccess(JSON.stringify(res.responseObject)));
            fn(res.data)
        });
    };
}

export function addFundInRecieverDetailsSuccess(fund) {
    return {
        type: ADD_FUND_IN_RECIEVER_SUCCESS,
        payload: fund
    }
}



