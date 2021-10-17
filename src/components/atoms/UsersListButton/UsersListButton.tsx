import React from 'react';
import { StyledButton, StyledDeleteIcon } from './UsersListButton.styles';

interface IUsersListButtonProps {
  className?: string;
  onClick?: (arg: any) => void;
}

const UsersListButton = ({ className, onClick }: IUsersListButtonProps) => (
  <StyledButton className={className} onClick={onClick}>
    <StyledDeleteIcon />
  </StyledButton>
);

export default UsersListButton;
