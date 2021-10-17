import React from 'react';
import { StyledButton, StyledDeleteIcon } from './UsersListButton.styles';

interface IUsersListButtonProps {
  className?: string;
}

const UsersListButton = ({ className }: IUsersListButtonProps) => (
  <StyledButton className={className}>
    <StyledDeleteIcon />
  </StyledButton>
);

export default UsersListButton;
