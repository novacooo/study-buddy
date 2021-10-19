import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { IUserData, users as usersData } from 'data/users';
import AddUser from 'views/AddUser/AddUser';
import Dashboard from 'views/Dashboard/Dashboard';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const mockAPI = () => {
  return new Promise<IUserData[]>((resolve, reject) => {
    setTimeout(() => {
      usersData ? resolve(usersData) : reject({ message: 'Error' });
    }, 2000);
  });
};

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState([] as IUserData[]);
  const [isLoading, setIsLoading] = useState(true);
  const [formValues, setFormValues] = useState(initialFormState);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name: string) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
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
        <MainTemplate>
          <Switch>
            <Route exact path="/">
              <Dashboard users={users} isLoading={isLoading} deleteUser={deleteUser} />
            </Route>
            <Route exact path="/add-user">
              <AddUser formValues={formValues} handleInputChange={handleInputChange} handleAddUser={handleAddUser} />
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </HashRouter>
  );
};

export default Root;