import React from "react";
import { DecksListPanelWrapper, PanelRow } from "./style";

const DecksListPanel = ({ decks, onDecksClicked }) => {
  return (
    <DecksListPanelWrapper>
      {decks.map((deck, index) => (
        <PanelRow key={index} onClick={() => onDecksClicked(deck)}>
          {deck}
        </PanelRow>
      ))}
    </DecksListPanelWrapper>
  );
};

export default DecksListPanel;
