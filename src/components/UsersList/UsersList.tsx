import React from 'react';
import styled from 'styled-components';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const Wrapper = styled.div`
  padding: 40px 30px;
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px hsla(0, 0%, 0%, 0.3);
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem data={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
