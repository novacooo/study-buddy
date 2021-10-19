import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { IUserData, users as usersData } from 'data/users';
import UsersList from 'components/organisms/UsersList/UsersList';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Form from 'components/organisms/Form/Form';
import NavBar from 'components/organisms/NavBar/NavBar';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

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
        <Wrapper>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <UsersList users={users} isLoading={isLoading} deleteUser={deleteUser} />
            </Route>
            <Route exact path="/add-user">
              <Form formValues={formValues} handleInputChange={handleInputChange} handleAddUser={handleAddUser} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </HashRouter>
  );
};

export default Root;
