import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import UsersList from 'components/organisms/UsersList/UsersList';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 50px;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
