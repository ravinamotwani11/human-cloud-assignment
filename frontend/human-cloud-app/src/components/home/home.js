import React, { Component } from "react";


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFund: "",
      sendFund: "",

    };

    this.initialState = this.state;
  }


  render() {
    debugger
const data= this.props.getFund;
    return (
      <div>

        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="card" style={{ width: "800px" }}>
            <img class="card-img-top" src="" />
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <a href="#" className="btn btn btn-add log-btn" onClick={() => { this.props.history.push("/addFund") }}>
                    <span class="glyphicon glyphicon-wallet"></span> Add Funds
        </a>
                </div>
                <div class="col-sm-6">
                  <a href="#" className="btn btn btn-add log-btn" onClick={() => { this.props.history.push("/sendFund") }}>
                    <span class="glyphicon glyphicon-send"></span> Send Funds
        </a>
                </div>
              </div>
              <div class="row">
                <h3 class="card-title" style={{ padding: "20px" }}>Transactions</h3>
              </div>
              <ul class="list-group list-group-flush">
                {(this.props.getFund || []).map((fundList, index) => {
                  return (
                    <li style={{ width: "800px", height: "100px" }} class="list-group-item">
                      <div class="col-sm-8">
                        <div class="row">
                          <label>{fundList.walletName}</label>
                        </div>
                        <div class="row">
                          <label>{fundList.date}</label>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <label>{fundList.addFund == null ? + "-" + fundList.sendFund : + "+" + fundList.sendFund}</label>
                      </div>
                    </li>
                  )
                }
                )
                }
              </ul>


            </div>
          </div>
          <div class="card-footer text-muted"></div>

        </div>
{/* footer */}
        <div className="footer">
          <div className="row">
            <div className="col-md-4">
              <button type="button"
                onClick={() => { this.props.history.push("/home") }}
                style={{ width: "650px" }}
                className="btn btn btn-footer log-btn"
              > Home</button>
            </div>
            <div className="col-md-4">
              <button type="button"
                onClick={() => { this.props.history.push("/transactions") }}
                style={{ width: "650px" }}
                className="btn btn btn-footer log-btn"
              > Transactions</button>
            </div>
            <div className="col-md-4">
              <button type="button"
                onClick={() => { this.props.history.push("/addProfile") }}
                style={{ width: "650px" }}
                className="btn btn btn-footer log-btn"
              > Profile</button>
            </div>
          </div>
        </div>

      </div>
// footer-end



    );
  }
}
export default Home;
