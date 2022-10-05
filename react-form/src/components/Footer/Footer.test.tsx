import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('checks if the footer is rendered or not', () => {
  test('render footer text component', () => {
    render(<Footer />);
    expect(screen.getByText(/Kornull/i)).toBeInTheDocument();
  });
  test('render footer component on page', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
