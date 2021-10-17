import React from 'react';
import { Attendance, Name, Wrapper } from './UsersListText.styles';

interface IUsersListTextProps {
  name: string;
  attendance: number;
  className?: string;
}

const UsersListText = ({ name, attendance, className }: IUsersListTextProps) => (
  <Wrapper className={className}>
    <Name>{name}</Name>
    <Attendance>attendance {attendance}%</Attendance>
  </Wrapper>
);

export default UsersListText;
