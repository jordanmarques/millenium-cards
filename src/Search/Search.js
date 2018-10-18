import React, { Component } from "react";
import { cards } from "../card";
import { SearchInput, Table } from "evergreen-ui";
import { SearchWrapper, SearchInputWrapper, SearchResult } from "./style";
import CardOverview from "./CardOverview/CardOverview";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards
    };
  }

  search = value =>
    this.setState({
      cards: cards.filter(card => card.name.toLowerCase().indexOf(value) !== -1)
    });

  render() {
    return (
      <SearchWrapper>
        <SearchInputWrapper>
          <SearchInput
            placeholder="Card Name..."
            onChange={e => this.search(e.target.value)}
          />
        </SearchInputWrapper>
        <SearchResult>
          {this.state.cards.map((card, index) => (
            <CardOverview
              key={index}
              name={card.name}
              attack={card.attack}
              defense={card.defense}
              attrivute={card.attribute}
            />
          ))}
        </SearchResult>
      </SearchWrapper>
    );
  }
}
