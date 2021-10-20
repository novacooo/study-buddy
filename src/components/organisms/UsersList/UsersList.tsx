import React from 'react';
import { IUserData } from 'data/users';
import { StyledList } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

interface IUsersListProps {
  users: IUserData[];
  deleteUser: (name: string) => void;
}

const UsersList = ({ users, deleteUser }: IUsersListProps) => {
  return (
    <StyledList>
      {users.map((userData, index) => (
        <UsersListItem key={userData.name} onClickDeleteButton={deleteUser} index={index} data={userData} />
      ))}
    </StyledList>
  );
};

export default UsersList;
