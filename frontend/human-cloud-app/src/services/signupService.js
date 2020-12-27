// import { Global_var } from "../global/global_var";
import RestDataSource from "./restdatasource";

export const signupService = {
    signup
};

function signup(userData, fn) {

          var url = "http://localhost:8005/humanCloud-identity/api/authentication/signup";
          return new RestDataSource(url, null, fn).Store(userData, (res) => fn(res));
}



