import styled from "react-emotion";
import { SearchInput } from "evergreen-ui";

export const SearchWrapper = styled("div")`
  padding: 5px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export const SearchInputWrapper = styled(SearchInput)`
  font-weight: bold;
`;

export const SearchResult = styled("div")`
    display: flex
    flex-flow: column wrap;
`;
