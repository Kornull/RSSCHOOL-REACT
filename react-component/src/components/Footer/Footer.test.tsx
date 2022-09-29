import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';
import { TextFooter } from './Footer';

test('Footer component', () => {
  render(<Footer />);
  expect(screen.getByText(TextFooter.textFooter)).toBeInTheDocument();
});
