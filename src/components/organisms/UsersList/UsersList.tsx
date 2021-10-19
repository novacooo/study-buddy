import React from 'react';
import { IUserData } from 'data/users';
import { StyledList, LoadingText } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

interface IUsersListProps {
  users: IUserData[];
  isLoading?: boolean;
  deleteUser: (name: string) => void;
}

const UsersList = ({ users, isLoading = false, deleteUser }: IUsersListProps) => {
  return (
    <StyledList>
      {isLoading ? <LoadingText>Loading...</LoadingText> : null}
      {users.map((userData, index) => (
        <UsersListItem key={userData.name} onClickDeleteButton={deleteUser} index={index} data={userData} />
      ))}
    </StyledList>
  );
};

export default UsersList;
