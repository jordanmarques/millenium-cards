import React from "react";
import Search from "../Search/Search";
import Decks from "../Decks/Decks";
import { BodyWrapper } from "./style";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Body = props => {
  return (
    <BodyWrapper>
      <Route exact path="/" component={Search} />
      <Route path="/decks" component={Decks} />
    </BodyWrapper>
  );
};

export default Body;
