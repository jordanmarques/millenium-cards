import styled from "react-emotion";

export const CardWrapper = styled("div")`
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
  margin: 0 5px;
  color: #425a70;
`;
