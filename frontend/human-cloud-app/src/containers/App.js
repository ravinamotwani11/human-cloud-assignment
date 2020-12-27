import React, { Component } from "react";
import "./App.css";
import Routes from "../routes/routes";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment >
        <Routes {...this.props}/>
      </React.Fragment>
    );
  }
}

export default App;