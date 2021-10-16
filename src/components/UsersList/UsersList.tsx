import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem data={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
