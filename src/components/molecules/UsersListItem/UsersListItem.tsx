import React from 'react';
import styled from 'styled-components';
import { IUserData } from 'data/users';
import Button from 'components/atoms/Button/Button';

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

const UsersListItem = ({ data: { name, attendance, average } }: IUsersListItemProps) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>attendance {attendance}%</p>
    </div>
    <Button />
  </Wrapper>
);

export default UsersListItem;
