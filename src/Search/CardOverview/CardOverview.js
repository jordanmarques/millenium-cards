import React from "react";
import Stat from "./Stat";
import sword from "../../img/sword.svg";
import shield from "../../img/shield.svg";
import { CardImage, CardWrapper, CardStats, StatsWrapper } from "./style";

const CardOverview = ({ name, attack, defense, number }) => {
  return (
    <CardWrapper to={`/card/${number}`}>
      <CardImage src={`http://yugiohprices.com/api/card_image/${name}`} />
      <CardStats>
        <h3>{name}</h3>
        <StatsWrapper>
          <Stat icon={sword}> {attack} </Stat>
          <Stat icon={shield}> {defense} </Stat>
        </StatsWrapper>
      </CardStats>
    </CardWrapper>
  );
};

export default CardOverview;
