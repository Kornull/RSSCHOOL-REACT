import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import PersonCard from './PersonCard';

// export const testData: ModalProps = {
//   personInfo: characterInfo,
//   modalCondition: true,
//   onClickModal: () => {},
// };

describe('render CardModal', () => {
  test('return cardModal', () => {
    render(<PersonCard />);

    expect(screen.getByTestId('modal-card')).toBeInTheDocument();
  });
});

describe('click does not close ModalCard', () => {
  test('click inside the card', () => {
    render(<PersonCard />);
    userEvent.click(screen.getByTestId('describe-card'));

    expect(screen.getByTestId('modal-card')).toBeInTheDocument();
  });
});
