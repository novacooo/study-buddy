import React, { useState } from 'react';
import { IUserData, users as usersData } from 'data/users';
import { IFormValues } from 'views/AddUser/AddUser';

interface IUsersContext {
  users: IUserData[];
  handleAddUser: (formValues: IFormValues) => void;
  deleteUser: (name: string) => void;
}

interface IUsersProviderProps {
  children: React.ReactNode;
}

const defaultState = {
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
};

export const UsersContext = React.createContext<IUsersContext>(defaultState);

const UsersProvider = ({ children }: IUsersProviderProps) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name: string) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (formValues: IFormValues) => {
    const newUser: IUserData = {
      name: formValues.name,
      attendance: parseInt(formValues.attendance),
      average: parseFloat(formValues.average),
    };

    setUsers([newUser, ...users]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
