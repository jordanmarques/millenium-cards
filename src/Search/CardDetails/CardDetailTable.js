import React from "react";
import {
  CardDetailTableRow,
  CardDetailTableWrapper,
  CardStatsTitle,
  CardStatsValue
} from "./style";

const CardDetailTable = ({ card }) => {
  return (
    <CardDetailTableWrapper>
      {Object.keys(card)
        .map((key, index) => (
          <CardDetailTableRow key={index}>
            <CardStatsTitle>{key}</CardStatsTitle>
            <CardStatsValue>{card[key]}</CardStatsValue>
          </CardDetailTableRow>
        ))}
    </CardDetailTableWrapper>
  );
};

export default CardDetailTable;
