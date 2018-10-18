import React from "react";
import { HeaderWrapper, HeaderLink } from "./style";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <HeaderWrapper>
      <HeaderLink>
        <Link to="/">Search</Link>
      </HeaderLink>
      <HeaderLink>
        <Link to="/decks">Decks</Link>
      </HeaderLink>
    </HeaderWrapper>
  );
};

export default Header;
