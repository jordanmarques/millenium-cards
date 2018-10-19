import React from "react";
import { DecksWrapper } from "./style";
import DeckDetails from "./DeckDetails";
import DecksList from "./DecksList/DecksList";

const Decks = () => {
  return (
    <DecksWrapper>
      <DecksList />
      <DeckDetails />
    </DecksWrapper>
  );
};

export default Decks;
