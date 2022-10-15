import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import HomePage from './HomePage';
import { UrlApi } from '../../components/types/types';
// import userEvent from '@testing-library/user-event';

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

// describe('render components on home page', () => {
//   test(' if returned data from API rendered into component', async () => {
//     const { getByTestId } = render(<HomePage />);
//     // const search =;
//     userEvent.type(screen.getByTestId('search-cards'), 'morty');
//     userEvent.click(getByTestId('form-search'));
//     expect(screen.getByTestId('person-card')).toBeInTheDocument();
//   });
//   test(' if returned data from API rendered into component', async () => {
//     render(<HomePage />);
//     // const search =;
//     userEvent.type(screen.getByTestId('search-cards'), 'morty123456789');
//     userEvent.click(screen.getByTestId('form-search'));
//     expect(screen.getByTestId('error-text')).toBeInTheDocument();
//     screen.debug();
//     console.log(screen.getByTestId('error-text'));
//   });
// });
