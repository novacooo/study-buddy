import React from 'react';
import { IUserData } from 'data/users';
import { StyledButton, StyledText, Wrapper } from './UsersListItem.styles';
import UsersListBadge from 'components/atoms/UsersListBadge/UsersListBadge';

interface IUsersListItemProps {
  index: number;
  data: IUserData;
  onClickDeleteButton?: (arg: any) => void;
}

const UsersListItem = ({ index, data: { name, attendance, average }, onClickDeleteButton }: IUsersListItemProps) => {
  const handleButtonClick = () => {
    if (onClickDeleteButton) onClickDeleteButton(name);
  };

  return (
    <Wrapper>
      <UsersListBadge average={average} />
      <StyledText name={name} attendance={attendance} />
      <StyledButton onClick={handleButtonClick} />
    </Wrapper>
  );
};

export default UsersListItem;
