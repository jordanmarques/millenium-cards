import React, { Component } from "react";
import { DecksListWrapper } from "./style";
import DecksActions from "./DecksActions";
import DecksListPanel from "./DecksListPanel";

export default class DecksList extends Component {
  constructor(props) {
    super(props);

    var decksFromStorage = JSON.parse(localStorage.getItem("decks"));

    this.state = {
      decks: decksFromStorage || [],
      newDeck: ""
    };
  }

  onDeckClicked = deck => {
    console.log(deck);
  };

  addDeck = name => {
    this.setState(prevState => {
      var { decks } = prevState;
      var newDecks = [...decks, name];
      localStorage.setItem("decks", JSON.stringify(newDecks));
      return { decks: newDecks };
    });
  };

  render() {
    return (
      <DecksListWrapper>
        <DecksActions addNewDeck={this.addDeck} />
        <DecksListPanel
          decks={this.state.decks}
          onDecksClicked={this.onDeckClicked}
        />
      </DecksListWrapper>
    );
  }
}
