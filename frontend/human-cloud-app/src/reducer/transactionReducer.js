import {
    GET_FUND_SUCCESS,
    ADD_FUND_SUCCESS,
    SEND_FUND_SUCCESS,
    ADD_FUND_IN_RECIEVER_SUCCESS,

} from "../action/transactionAction";

const initialState = {

    addFundData: [],
    sendFundData: [],
    getFundData: [],
    addFundInRecieverData: [],

};

const TransactionReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FUND_SUCCESS:
            return {
                ...state,
                getFundData: action.payload,

            };


        case ADD_FUND_SUCCESS:
            return {
                ...state,
                addFundData: action.payload,

            };

        case SEND_FUND_SUCCESS:
            return {
                ...state,
                sendFundData: action.payload,

            };

        case ADD_FUND_IN_RECIEVER_SUCCESS:
            return {
                ...state,
                addFundInRecieverData: action.payload,

            };


        default:
            return state;
    }
};

export default TransactionReducer;

export const getFundData = (state) => state.getFundData;
export const addFundData = (state) => state.addFundData;
export const sendFundData = (state) => state.sendFundData;
export const addFundInRecieverData = (state) => state.addFundInRecieverData;


