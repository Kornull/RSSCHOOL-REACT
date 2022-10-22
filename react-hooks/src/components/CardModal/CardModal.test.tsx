import CardModal, { ModalProps } from './CardModal';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { characterInfo } from '../Cards/Card/Card.test';

export const testData: ModalProps = {
  personInfo: characterInfo,
  modalCondition: true,
  onClickModal: () => {},
};

describe('render modal window', () => {
  test('return card modal', () => {
    render(<CardModal {...testData} />);

    expect(screen.getByTestId('modal-card')).toBeInTheDocument();
  });
});
