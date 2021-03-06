import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { cards } from "../card";
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
      cards: cards.filter(
        card => card.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      )
    });

  render() {
    const Item = posed.div({});

    return (
      <SearchWrapper>
        <SearchInputWrapper
          placeholder=""
          onChange={e => this.search(e.target.value)}
        />
        <SearchResult>
            <PoseGroup>
              {this.state.cards.map((card, index) => (
                <Item key={index}>
                  <CardOverview
                    key={index}
                    name={card.name}
                    attack={card.attack}
                    defense={card.defense}
                    attrivute={card.attribute}
                    number={card.number}
                  />
                </Item>
              ))}
            </PoseGroup>
        </SearchResult>
      </SearchWrapper>
    );
  }
}
