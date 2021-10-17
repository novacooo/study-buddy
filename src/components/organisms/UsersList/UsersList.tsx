import React from 'react';
import { users } from 'data/users';
import { StyledList, Wrapper } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, index) => (
        <UsersListItem key={userData.name} index={index} data={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
