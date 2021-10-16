import React from 'react';
import styled from 'styled-components';
import UsersList from 'components/UsersList/UsersList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 50px;
  width: 100%;
  min-height: 100%;
  background-color: #f7f8fa;
`;

const Root = () => (
  <Wrapper>
    <UsersList />
  </Wrapper>
);

export default Root;
