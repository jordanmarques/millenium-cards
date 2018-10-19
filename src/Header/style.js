import styled from "react-emotion";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled("div")`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-image: linear-gradient(to right, #2c3e50 , #567088);
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
  padding: 20px;
  &:hover {
    background-color: #f39c12;
  }
  &:active {
    background-color: #f39c12;
  }
`;

export const AppLogoWrapper = styled("div")`
  display: flex;
  align-items: center;
  margin: 0 5px;
  display: flex;
`;

export const CardLogo = styled("img")`
  margin-right: 7px;
  height: 2em;
  transform: rotate(20deg);
`;

export const AppTitle = styled("div")`
  font-style: italic;
  color: white;
`;
