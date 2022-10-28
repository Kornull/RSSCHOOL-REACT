import React from 'react';
import { AboutCard } from '../types/types';

import ModalList from './ModalList/ModalList';

import styles from './CardModal.module.scss';

enum ModalCardClose {
  closeId = 'modal-close',
}

export type ModalProps = {
  personInfo: AboutCard[];
  modalCondition: boolean;
  onClickModal: (stateModal: boolean) => void;
};

const CardModal = ({ personInfo, modalCondition, onClickModal }: ModalProps) => {
  const handleClick = (ev: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
    ev.stopPropagation();
    const element = ev.target as HTMLElement;
    if (element.id) onClickModal(!modalCondition);
  };

  return (
    <div
      className={styles.modal}
      onClick={handleClick}
      id={ModalCardClose.closeId}
      data-testid="modal-card"
    >
      <div className={styles.modalCard} data-testid="describe-card">
        <ul>
          <li>
            <img className={styles.modalImage} src={personInfo[0].image} alt="image" />
          </li>
          <ModalList title="Dossier created" describe={personInfo[0].created} />
          <ModalList title="ID" describe={personInfo[0].id} />
          <ModalList title="Full name" describe={personInfo[0].name} />
          <ModalList title="Species" describe={personInfo[0].species} />
          <ModalList title="Status" describe={personInfo[0].status} />
          <ModalList title="Gender" describe={personInfo[0].gender} />
          <ModalList title="Location" describe={personInfo[0].location!.name} />
          <ModalList title="Origin location" describe={personInfo[0].origin!.name} />
        </ul>
        <button
          className={styles.modalClose}
          onClick={handleClick}
          id={ModalCardClose.closeId}
          data-testid="close-modal-card"
        ></button>
      </div>
    </div>
  );
};

export default CardModal;
