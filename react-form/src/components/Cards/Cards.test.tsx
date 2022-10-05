import { render, screen } from '@testing-library/react';
import React from 'react';
import Cards from './Cards';
import { characterInfo } from './Card/Card.test';

test('render homepage cards', () => {
  render(<Cards cardList={characterInfo} />);
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/location/i)).toBeInTheDocument();
});

test('not render cards', () => {
  render(<Cards cardList={undefined} />);
  expect(screen.getByText(/nothing/i)).toBeInTheDocument();
});
