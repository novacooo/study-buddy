import React from 'react';
import { IUserData } from 'data/users';
import { Wrapper } from './Dashboard.styles';
import UsersList from 'components/organisms/UsersList/UsersList';

interface IDashboardProps {
  users: IUserData[];
  deleteUser: (name: string) => void;
}

const Dashboard = ({ users, deleteUser }: IDashboardProps) => (
  <Wrapper>
    <UsersList users={users} deleteUser={deleteUser} />
  </Wrapper>
);

export default Dashboard;
