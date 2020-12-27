// import { Global_var } from "../global/global_var";
import RestDataSource from "./restdatasource";

export const loginService = {
  login,
  oAuthSignIn
};

function login(userData, fn) {

          var url = "http://localhost:8005/humanCloud-identity/api/authentication/login";
          return new RestDataSource(url, null, fn).Store(userData, (res) => fn(res));
}

function oAuthSignIn(userData, fn) {

    var url = "http://localhost:8005/humanCloud-identity/api/authentication/oauthLogin";
    return new RestDataSource(url, null, fn).Store(userData, (res) => fn(res));
}


