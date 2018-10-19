import styled from "react-emotion";
import { Link } from "react-router-dom";

export const CardWrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #e4e7eb;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  display: flex;
  &:hover {
    background-color: #e4e7eb;
  }
`;

export const CardImage = styled("img")`
  height: 200px;
`;

export const CardStats = styled("div")`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;
  align-items: center;
  margin: 0 5px;
  color: #425a70;
`;
