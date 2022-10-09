import { render, screen } from '@testing-library/react';
import React from 'react';
import UserCards from './UserCards';

import { characterUserInfo } from './UserCard/UserCard.test';

test('render user cards', () => {
  render(<UserCards cards={characterUserInfo} />);
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/location/i)).toBeInTheDocument();
});

describe('if cards not found nothing is displayed', () => {
  test('array with user cards is empty', () => {
    render(<UserCards cards={undefined} />);
    expect(screen.queryByTestId('user-cards')).toBeInTheDocument();
  });
});
