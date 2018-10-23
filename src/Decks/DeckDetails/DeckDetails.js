import React from "react";
import { Autocomplete, TextInput } from "evergreen-ui";
import {
  DecksDetailsWrapper,
  DeckDetailCardImage,
  DeckDetailCardImages,
  DeckDetailTitle,
  DeckDetailTitleWrapper
} from "./style";
import { cards } from "../../card";
import { connect } from "../../logic/app";

const DeckDetails = props => {
  var state = props.app.state;
  var actions = props.app.actions;
  var selectedDeck = state.selectedDeck;

  return (
    selectedDeck ?
    <DecksDetailsWrapper>
      <DeckDetailTitleWrapper>
        <DeckDetailTitle>
          {capitalizeFirstLetter(selectedDeck.name)}
        </DeckDetailTitle>
        <Autocomplete
          title="Cards"
          onChange={cardName =>
            actions.addCardToCurrentDeck(
              cards
                .find(card => card.name === cardName).number
            )
          }
          items={cards.map(card => card.name)}
        >
          {props => {
            const { getInputProps, getRef, inputValue } = props;
            return (
              <TextInput
                placeholder="card name..."
                value={inputValue}
                innerRef={getRef}
                {...getInputProps()}
              />
            );
          }}
        </Autocomplete>
      </DeckDetailTitleWrapper>
      <DeckDetailCardImages>
        {imageNames(selectedDeck).map((name, index) => (
          <DeckDetailCardImage
            key={index}
            src={`http://yugiohprices.com/api/card_image/${name}`}
          />
        ))}
      </DeckDetailCardImages>
    </DecksDetailsWrapper>
    :
    <div>titi</div>
  );
};

const imageNames = selectedDeck => {
  return cards
    .filter(
      card =>
        card.number ==
        selectedDeck.cards.find(deckCard => deckCard == card.number)
    )
    .map(foundCard => foundCard.name);
};

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default connect(DeckDetails);
