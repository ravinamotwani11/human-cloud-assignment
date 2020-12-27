import RestDataSource from "./restdatasource";

export const transactionService = {
    getFund,
    addFund,
    sendFund,
    addFundInRecieverWallet,
    sendNotification
};

//get fund
function getFund(userId,fn) {

          var url = "http://localhost:8002/humanCloud-wallet/api/profile/getFund?userId="+userId;
         
          return new RestDataSource(url, null, fn).GetData((res) => fn(res));
}

//add Fund
function addFund(fund, fn) {

    var url = "http://localhost:8002/humanCloud-wallet/api/wallet/addFund";
   
    return new RestDataSource(url, 0, fn).Store(fund, (res) => fn(res));
}

//send Fund
function sendFund(fund, fn) {

    var url = "http://localhost:8002/humanCloud-wallet/api/wallet/sendFund";

    return new RestDataSource(url, 0, fn).Store(fund, (res) => fn(res));
}

//add fund in reciever wallet
function addFundInRecieverWallet(fund, fn) {

    var url = "http://localhost:8002/humanCloud-wallet/api/wallet/addFundInReciever";
    return new RestDataSource(url, 0, fn).Store(fund, (res) => fn(res));
}

//sendNotification
function sendNotification(email, fn) {

    var url = "http://localhost:8004/humanCloud-notification/api/notification/sendMail?emailAddress="+email;
    return new RestDataSource(url, null, fn).GetData((res) => fn(res));
}



