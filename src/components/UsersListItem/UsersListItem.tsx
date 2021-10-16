import React from 'react';
import { IUserData } from 'data/users';

interface IUsersListItemProps {
  data: IUserData;
}

const UsersListItem = ({
  data: { name, attendance, average },
}: IUsersListItemProps) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>attendance {attendance}%</p>
    </div>
    <button>X</button>
  </li>
);

export default UsersListItem;
