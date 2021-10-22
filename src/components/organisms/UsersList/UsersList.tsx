import React, { useContext } from 'react';
import { StyledList } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <StyledList>
      {users.map((userData) => (
        <UsersListItem key={userData.name} data={userData} />
      ))}
    </StyledList>
  );
};

export default UsersList;
