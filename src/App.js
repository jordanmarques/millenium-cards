import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { BrowserRouter as Router } from "react-router-dom";

const App = props => {
  return (
    <Router>
      <div>
        <Header />
        <Body />
      </div>
    </Router>
  );
};

export default App;
