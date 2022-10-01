import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

test('header component', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByText(/main/i)).toBeInTheDocument();
});
test('header has list and navigation', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
