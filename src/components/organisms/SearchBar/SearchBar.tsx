import React from 'react';
import Input from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo, StatusText } from 'components/organisms/SearchBar/SearchBar.styles';

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <StatusText>Logged as:</StatusText>
      <StatusText name>Teacher</StatusText>
    </StatusInfo>
    <Input placeholder="Search for student..." />
  </SearchBarWrapper>
);

export default SearchBar;
