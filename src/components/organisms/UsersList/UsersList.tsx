import React, { useState, useEffect } from 'react';
import { IUserData, users as usersData } from 'data/users';
import { FormWrapper, LoadingText, StyledList, Wrapper } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const mockAPI = () => {
  return new Promise<IUserData[]>((resolve, reject) => {
    setTimeout(() => {
      usersData ? resolve(usersData) : reject({ message: 'Error' });
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([] as IUserData[]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <FormWrapper>
        <FormField label="Name" name="name" id="name" />
        <FormField label="Attendance" name="attendance" id="attendance" />
        <FormField label="Average" name="average" id="average" />
        <Button>Add user</Button>
      </FormWrapper>
      <Wrapper>
        <StyledList>
          {isLoading ? <LoadingText>Loading...</LoadingText> : null}
          {users.map((userData, index) => (
            <UsersListItem key={userData.name} onClickDeleteButton={deleteUser} index={index} data={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
