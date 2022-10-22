import CardModal, { ModalProps } from './CardModal';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { characterInfo } from '../Cards/Card/Card.test';
import userEvent from '@testing-library/user-event';

export const testData: ModalProps = {
  personInfo: characterInfo,
  modalCondition: true,
  onClickModal: () => {},
};

describe('render CardModal', () => {
  test('return cardModal', () => {
    render(<CardModal {...testData} />);

    expect(screen.getByTestId('modal-card')).toBeInTheDocument();
  });
});

describe('click does not close ModalCard', () => {
  test('click inside the card', () => {
    render(<CardModal {...testData} />);
    userEvent.click(screen.getByTestId('describe-card'));

    expect(screen.getByTestId('modal-card')).toBeInTheDocument();
  });
});
