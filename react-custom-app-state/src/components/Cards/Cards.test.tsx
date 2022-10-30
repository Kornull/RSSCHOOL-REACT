import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Cards from './Cards';
import userEvent from '@testing-library/user-event';

test('render homepage cards', () => {
  render(<Cards />);
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/location/i)).toBeInTheDocument();
});

test('not render cards', () => {
  render(<Cards />);
  expect(screen.getByText(/nothing/i)).toBeInTheDocument();
});

describe('render card modal', () => {
  test('click card - return card modal', async () => {
    render(<Cards />);

    userEvent.click(screen.getByTestId('person-card'));
    await waitFor(() => {
      expect(screen.getByTestId('modal-card')).toBeInTheDocument();
    });
  });
});

describe('close modal card', () => {
  test('modal element missing after button click', async () => {
    render(<Cards />);

    userEvent.click(screen.getByTestId('person-card'));

    await waitFor(() => {
      userEvent.click(screen.getByTestId('close-modal-card'));
    });
    expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();
  });
});
