import React from 'react';
import styled from 'styled-components';
import { IUserData } from 'data/users';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

interface IUsersListItemProps {
  data: IUserData;
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 25px;
  height: 25px;
  background-color: #c0c7d6;
  border: none;
  border-radius: 50px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 16px;
  height: 16px;
`;

const UsersListItem = ({ data: { name, attendance, average } }: IUsersListItemProps) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>attendance {attendance}%</p>
    </div>
    <StyledButton>
      <StyledDeleteIcon />
    </StyledButton>
  </Wrapper>
);

export default UsersListItem;
