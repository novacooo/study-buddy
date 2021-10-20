import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { IUserData, users as usersData } from 'data/users';
import AddUser from 'views/AddUser/AddUser';
import Dashboard from 'views/Dashboard/Dashboard';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

export const UsersContext = React.createContext({
  users: [] as IUserData[],
  handleAddUser: (e: React.FormEvent<HTMLFormElement>) => {},
  deleteUser: (name: string) => {},
});

const Root = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name: string) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: IUserData = {
      name: formValues.name,
      attendance: parseInt(formValues.attendance),
      average: parseFloat(formValues.average),
    };

    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UsersContext.Provider
          value={{
            users: users,
            handleAddUser,
            deleteUser,
          }}
        >
          <MainTemplate>
            <Switch>
              <Route exact path="/">
                <Dashboard users={users} deleteUser={deleteUser} />
              </Route>
              <Route exact path="/add-user">
                <AddUser />
              </Route>
            </Switch>
          </MainTemplate>
        </UsersContext.Provider>
      </ThemeProvider>
    </HashRouter>
  );
};

export default Root;
