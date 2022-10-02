import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('checks if the header is rendered or not', () => {
  test('render header component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });
  test('header has list and navigation', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navigation-list')).toHaveTextContent(/main/i);
    expect(screen.getByTestId('navigation-list')).toHaveTextContent(/about/i);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
