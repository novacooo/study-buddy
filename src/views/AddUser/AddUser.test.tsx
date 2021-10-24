import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from 'views/AddUser/AddUser';
import { fireEvent, screen } from '@testing-library/react';
import Dashboard from 'views/Dashboard/Dashboard';

describe('FormField component', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'User' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '99%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.9' } });
    fireEvent.click(screen.getByText('Add user'));

    screen.getByText('User');
  });
});
