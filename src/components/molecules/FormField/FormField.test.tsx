import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import FormField from 'components/molecules/FormField/FormField';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('FormField component', () => {
  it('Renders the component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
