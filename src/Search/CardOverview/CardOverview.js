import React from "react";
import { CardImage, CardWrapper, CardStats } from "./style";

const CardOverview = ({ name, attack, defense }) => {
  return (
    <CardWrapper to={`/card/${name}`}>
      <CardImage src={`http://yugiohprices.com/api/card_image/${name}`} />
      <CardStats>
        <h3>{name}</h3>
        <h3>{attack} {defense}</h3>
      </CardStats>
    </CardWrapper>
  );
};

export default CardOverview;
