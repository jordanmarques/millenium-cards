import styled from "react-emotion";

export const DecksListWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 1px 2px rgba(67, 90, 111, 0.14);
  border-radius: 3px;
`;

export const DecksListPanelWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const PanelRow = styled("div")`
  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 1px 2px rgba(67, 90, 111, 0.14);
  border-radius: 1px;
  cursor: pointer;
  margin: 2px 0;
  padding: 2px;
  color: #425a70;

  &:hover {
    background-color: #e4e7eb;
  }
`;
