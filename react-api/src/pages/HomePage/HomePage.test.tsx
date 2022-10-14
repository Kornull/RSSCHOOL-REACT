import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import HomePage from './HomePage';
import { UrlApi } from './HomePage';

test('error fetch', async () => {
  const res = await fetch(`${UrlApi.LinkApi}`);
  const result = await res.json();
  expect.assertions(0);
  try {
    await result;
  } catch (e) {
    expect(e).toMatch('error');
  }
});

describe('render components on home page', () => {
  test(' if returned data from API rendered into component', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/sanchez/i)).toBeInTheDocument();
    });
  });
});
