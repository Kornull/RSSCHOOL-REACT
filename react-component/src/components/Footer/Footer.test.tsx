import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';
import { TextFooter } from './Footer';

describe('Footer component', () => {
  it('Footer renders', () => {
    render(<Footer />);
    expect(screen.getByText(TextFooter.textFooter)).toBeInTheDocument();
  });
});
