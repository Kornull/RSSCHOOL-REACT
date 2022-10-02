import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('render footer component', () => {
  render(<Footer />);
  expect(screen.getByText(/Kornull/i)).toBeInTheDocument();
});
