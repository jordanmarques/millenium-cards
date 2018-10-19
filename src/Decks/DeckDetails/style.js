import styled from "react-emotion";

export const DecksDetailsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  margin: 10px;
  padding: 5px;
  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3),
    inset 0 1px 2px rgba(67, 90, 111, 0.14);
  border-radius: 3px;
`;

export const DeckDetailCardImage = styled("img")`
  height: 100px;
  margin: 3px;
`;

export const DeckDetailCardImages = styled("div")`
  display: flex;
`;

export const DeckDetailTitleWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeckDetailTitle = styled("span")`
  color: #425a70;
  font-size: 2em;
  margin-right: 5px;
`;
