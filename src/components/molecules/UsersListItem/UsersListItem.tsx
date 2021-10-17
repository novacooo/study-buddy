import React from 'react';
import { IUserData } from 'data/users';
import { StyledButton, StyledText, Wrapper } from './UsersListItem.styles';
import UsersListBadge from 'components/atoms/UsersListBadge/UsersListBadge';

interface IUsersListItemProps {
  data: IUserData;
}

const UsersListItem = ({ data: { name, attendance, average } }: IUsersListItemProps) => (
  <Wrapper>
    <UsersListBadge average={average} />
    <StyledText name={name} attendance={attendance} />
    <StyledButton />
  </Wrapper>
);

export default UsersListItem;
