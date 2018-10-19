import React from "react";
import { HeaderWrapper, HeaderLink } from "./style";
import AppLogo from './AppLogo'

const Header = props => {
  return (
    <HeaderWrapper>
      <AppLogo />
      <HeaderLink to="/">Search</HeaderLink>
      <HeaderLink to="/decks">Decks</HeaderLink>
    </HeaderWrapper>
  );
};

export default Header;
