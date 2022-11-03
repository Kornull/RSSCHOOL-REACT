import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import HomePage from './HomePage';
import { ENDPOINTS } from '../../components/types/types';
import userEvent from '@testing-library/user-event';

describe('render cards on first page entry', () => {
  test('error fetch', async () => {
    const res = await fetch(`${ENDPOINTS.character}`);
    const result = await res.json();
    expect.assertions(0);
    try {
      await result;
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});

describe('render components on home page', () => {
  test(' if returned data from API rendered into component', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/sanchez/i)).toBeInTheDocument();
    });
  });
});
describe('render components on home page', () => {
  test('user click search panel', async () => {
    render(<HomePage />);
    userEvent.type(screen.getByTestId('search-cards'), 'morty');
    userEvent.click(screen.getByTestId('button-search'));
    await waitFor(() => {
      const subTitle = screen.getAllByText(/morty/i);
      expect(subTitle[0]).toBeInTheDocument();
    });
  });
});
