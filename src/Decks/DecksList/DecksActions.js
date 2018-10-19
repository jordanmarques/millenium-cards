import React, { Component } from "react";
import { TextInput, Button } from "evergreen-ui";
import { connect } from "../../logic/app";

const DecksActions = props => {
  var actions = props.app.actions;
  var state = props.app.state;

  return (
    <div>
      <TextInput
        onChange={e => actions.onInputNewDeckChange(e.target.value)}
        value={state.newDeckInput}
        placeholder={"New Deck Name..."}
      />
      <Button marginLeft={7} onClick={() => actions.newDeck()}>
        Create Deck
      </Button>
    </div>
  );
};

export default connect(DecksActions);
