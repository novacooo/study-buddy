import React from 'react';
import { Wrapper } from './Dashboard.styles';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => (
  <Wrapper>
    <UsersList />
  </Wrapper>
);

export default Dashboard;
