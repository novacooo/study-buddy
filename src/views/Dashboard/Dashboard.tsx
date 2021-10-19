import React from 'react';
import { IUserData } from 'data/users';
import { Wrapper } from './Dashboard.styles';
import UsersList from 'components/organisms/UsersList/UsersList';

interface IDashboardProps {
  users: IUserData[];
  isLoading?: boolean;
  deleteUser: (name: string) => void;
}

const Dashboard = ({ users, isLoading = false, deleteUser }: IDashboardProps) => (
  <Wrapper>
    <UsersList users={users} isLoading={isLoading} deleteUser={deleteUser} />
  </Wrapper>
);

export default Dashboard;