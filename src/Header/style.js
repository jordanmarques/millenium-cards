import styled from "react-emotion";

export const HeaderWrapper = styled("div")`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: #d35400;
`;

export const HeaderLink = styled("div")`
  cursor: pointer;
  margin: 0 7px;
  padding: 20px;
  &:hover {
    background-color: #f39c12;
  };
`;
