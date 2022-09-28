import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('Header renders', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText(/main/i)).toBeInTheDocument();
  });
  it('Header has list and navigation', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
