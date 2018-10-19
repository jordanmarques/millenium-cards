import React, { Component } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Body />
        </div>
      </Router>
    );
  }
}

export default App;
