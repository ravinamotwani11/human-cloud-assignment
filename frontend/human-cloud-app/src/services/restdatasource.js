import Axios from "axios";

export default class RestDataSource {
  constructor(base_url, userId, errorCallback) {
    // Token Configuration

    Axios.defaults.headers.common["Tokentype"] =
      localStorage.getItem("Tokentype") === ""
        ? "jti"
        : localStorage.getItem("Tokentype");
    Axios.defaults.headers.common["jtitoken"] =
      localStorage.getItem("jti-token") === ""
        ? ""
        : localStorage.getItem("jti-token");
    Axios.defaults.headers.common["token"] =
      localStorage.getItem("jwt-token") === ""
        ? ""
        : localStorage.getItem("jwt-token");
    Axios.defaults.headers.common["ApplicationId"] = "1";
    Axios.defaults.headers.common["BuId"] = "2427";
    Axios.defaults.headers.common["SubBuId"] = "1";
    Axios.defaults.headers.common["Environment"] = "dev";
    Axios.defaults.headers.common["issuer"] = "manna-health";
    Axios.defaults.headers.common["Content-Type"] =
      "application/json;charset=UTF-8";

    // Userid and userLogin
    Axios.defaults.headers.common["userid"] =
      localStorage.getItem("userData") === null
        ? ""
        : JSON.parse(localStorage.getItem("userData")).userId;

    Axios.defaults.headers.common["userlogin"] =
      localStorage.getItem("userData") === null
        ? "sonal@gmail.com"
        : JSON.parse(localStorage.getItem("userData")).emailId;

    Axios.defaults.headers.common["Access-Control-Allow-Origin"] =
      "*";
    this.BASE_URL = base_url;
    this.handleError = errorCallback;
  }

  async GetData(callback) {
    this.SendRequest("get", this.BASE_URL, callback);
  }
  async GetOneByParam(id, callback) {
    this.SendRequest("get", `${this.BASE_URL}?${id}`, callback);
  }
  async GetOne(data, callback) {
    this.SendRequest("get", this.BASE_URL, callback, data);
  }

  async Store(data, callback) {

    this.SendRequest("post", this.BASE_URL, callback, data);
  }
  async Update(data, callback) {
    this.SendRequest("put", this.BASE_URL, callback, data);
  }
  async Delete(data, callback) {

    this.SendRequest("delete", this.BASE_URL, callback, data);
  }
  async SendRequest(method, url, callback, data) {
    try {
      let response = await Axios.request({
        method: method,
        url: url,
        data: data,
      });
      callback(response);
    } catch (err) {
      console.log(err);
    }
  }
}
