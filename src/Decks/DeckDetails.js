import React from "react";
import { DecksDetailsWrapper } from "./style";
import { connect } from "../logic/app";

const DeckDetails = props => {
  var state = props.app.state;
  return <DecksDetailsWrapper>{state.selectedDeck}</DecksDetailsWrapper>;
};

export default connect(DeckDetails);
