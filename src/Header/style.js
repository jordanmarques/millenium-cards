import styled from "react-emotion";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled("div")`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: #d35400;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin: 0 7px;
  padding: 20px;
  &:hover {
    background-color: #f39c12;
  };
  &:active {
    background-color: #f39c12;
  }
`;
