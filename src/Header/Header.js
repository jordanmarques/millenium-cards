import React from "react";
import { HeaderWrapper, HeaderLink } from "./style";

const Header = props => {
  return (
    <HeaderWrapper>
      <HeaderLink to="/">Search</HeaderLink>
      <HeaderLink to="/decks">Decks</HeaderLink>
    </HeaderWrapper>
  );
};

export default Header;
