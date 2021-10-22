import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AddUser from 'views/AddUser/AddUser';
import Dashboard from 'views/Dashboard/Dashboard';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import UsersProvider from 'providers/UsersProvider';

const Root = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <UsersProvider>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/add-user">
              <AddUser />
            </Route>
          </Switch>
        </UsersProvider>
      </MainTemplate>
    </ThemeProvider>
  </HashRouter>
);

export default Root;
