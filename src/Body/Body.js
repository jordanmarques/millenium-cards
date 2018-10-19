import React from "react";
import Search from "../Search/Search";
import Decks from "../Decks/Decks";
import { BodyWrapper } from "./style";

import { Route } from "react-router-dom";
import CardDetails from "../Search/CardDetails/CardDetails";

const Body = () => {
  return (
    <BodyWrapper>
      <Route exact path="/" component={Search} />
      <Route path="/decks" component={Decks} />
      <Route path="/card/:number" component={CardDetails} />
    </BodyWrapper>
  );
};

export default Body;
