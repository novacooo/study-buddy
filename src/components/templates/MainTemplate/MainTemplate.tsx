import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import NavBar from 'components/organisms/NavBar/NavBar';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

interface IMainTemplateProps {
  children: React.ReactNode;
}

interface IStatusTextProps {
  name?: boolean;
}

const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${Input} {
    padding: 12px 30px;
    width: 100%;
    max-width: 470px;
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.searchBar};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StatusInfo = styled.div`
  margin-right: 40px;
`;

const StatusText = styled.p<IStatusTextProps>`
  margin: 3px 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme, name }) => (name ? theme.fontSize.l : theme.fontSize.m)};
  font-weight: ${({ theme, name }) => (name ? theme.fontWeight.bold : theme.fontWeight.regular)};
`;

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <StatusText>Logged as:</StatusText>
      <StatusText name>Teacher</StatusText>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);

const News = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

const MainTemplate = ({ children }: IMainTemplateProps) => (
  <Wrapper>
    <NavBar />
    <SearchBar />
    {children}
    <News />
  </Wrapper>
);

export default MainTemplate;
