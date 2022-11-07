import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from 'components/App';
import userEvent from '@testing-library/user-event';

describe('click does not close ModalCard', () => {
  test('render PersonCard', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      const card = screen.getAllByTestId('person-card');
      fireEvent.click(card[0]);

      expect(screen.getByTestId('modal-card')).toBeInTheDocument();
    });
  });
  test('close PersonCard', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      const card = screen.getAllByTestId('person-card');
      userEvent.click(card[0]);

      setTimeout(() => {
        userEvent.click(screen.getByTestId('close-person'));
        expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();
      }, 1000);
    });
  });
});
