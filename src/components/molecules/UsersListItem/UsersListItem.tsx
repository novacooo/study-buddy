import React, { useContext } from 'react';
import { IUserData } from 'data/users';
import { StyledButton, StyledText, Wrapper } from './UsersListItem.styles';
import UsersListBadge from 'components/atoms/UsersListBadge/UsersListBadge';
import { UsersContext } from 'providers/UsersProvider';

interface IUsersListItemProps {
  data: IUserData;
}

const UsersListItem = ({ data: { name, attendance, average } }: IUsersListItemProps) => {
  const { deleteUser } = useContext(UsersContext);

  const handleClick = () => {
    deleteUser(name);
  };

  return (
    <Wrapper>
      <UsersListBadge average={average} />
      <StyledText name={name} attendance={attendance} />
      <StyledButton onClick={handleClick} />
    </Wrapper>
  );
};

export default UsersListItem;
