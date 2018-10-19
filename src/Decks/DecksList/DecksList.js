import React, { Component } from "react";
import { DecksListWrapper } from "./style";
import DecksActions from "./DecksActions";
import DecksListPanel from "./DecksListPanel";
import { connect } from "../../logic/app";

const DecksList = props => {
  var actions = props.app.actions
  var state = props.app.state

  return (
    <DecksListWrapper>
      <DecksActions addNewDeck={actions.newDeck} />
      <DecksListPanel
        decks={state.decks}
        onDecksClicked={actions.onDeckClicked}
      />
    </DecksListWrapper>
  );
};

export default connect(DecksList);
