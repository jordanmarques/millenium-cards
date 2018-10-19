import React, { Component } from "react";
import { TextInput, Button } from "evergreen-ui";

export default class DecksActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDeck: ""
    };
  }

  render() {
    return (
      <div>
        <TextInput
          onChange={e => this.setState({ newDeck: e.target.value })}
          value={this.state.newDeck}
          placeholder={"New Deck Name..."}
        />
        <Button
          marginLeft={16}
          onClick={() => this.props.addNewDeck(this.state.newDeck)}
        >
          Create Deck
        </Button>
      </div>
    );
  }
}
