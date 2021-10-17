import React from 'react';
import { IUserData } from 'data/users';
import { Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';
import UsersListBadge from 'components/atoms/UsersListBadge/UsersListBadge';

interface IUsersListItemProps {
  data: IUserData;
}

const UsersListItem = ({ data: { name, attendance, average } }: IUsersListItemProps) => (
  <Wrapper>
    <UsersListBadge score={average} />
    <div>
      <p>{name}</p>
      <p>attendance {attendance}%</p>
    </div>
    <Button />
  </Wrapper>
);

export default UsersListItem;
