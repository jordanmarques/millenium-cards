import React from "react";
import logo from "../img/logo.svg";
import { AppLogoWrapper, CardLogo, AppTitle } from "./style";

const AppLogo = () => {
  return (
    <AppLogoWrapper>
      <CardLogo src={logo} />
      <AppTitle>Millenium Cards</AppTitle>
    </AppLogoWrapper>
  );
};

export default AppLogo;
