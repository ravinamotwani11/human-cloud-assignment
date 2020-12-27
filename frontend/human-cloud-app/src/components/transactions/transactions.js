import React, { Component } from "react";


export class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFund: "",
      sendFund: "",

    };
 

    this.initialState = this.state;
  }

  render() {

    return (
      <div>
 <div class="card" style={{ width: "800px" }}>
            
            <div class="card-body"></div>
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
      
            
      
          );
  }
}

export default Transaction;