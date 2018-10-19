import React, { Component } from "react";
import { cards } from "../../card";
import CardDetailTable from "./CardDetailTable";
import { CardDetailWraper, CardDetailImage } from "./style";

export default class CardDetails extends Component {
  constructor(props) {
    super(props);
    let name = props.match.params.name;
    this.state = {
      card: cards.find(card => card.name === name)
    };
  }

  render() {
    return (
      <CardDetailWraper>
        <CardDetailImage
          src={`http://yugiohprices.com/api/card_image/${this.state.card.name}`}
        />
        <CardDetailTable card={this.state.card} />
      </CardDetailWraper>
    );
  }
}
