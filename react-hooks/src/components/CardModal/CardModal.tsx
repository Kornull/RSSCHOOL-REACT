import React from 'react';
import { AboutCard } from '../types/types';

import styles from './CardModal.module.scss';
import { modalCard } from '../template/constants';

export type ModalProps = {
  personInfo: AboutCard[];
  modalCondition: boolean;
  onClickModal: (stateModal: boolean) => void;
};

const CardModal = (props: ModalProps) => {
  const handleClick = (ev: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
    ev.stopPropagation();
    const elementDom = ev.target as HTMLElement;
    if (elementDom.id === 'close-modal') props.onClickModal(modalCard);
  };

  return (
    <div className={styles.modal} onClick={handleClick} id="close-modal" data-testid="modal-card">
      <div className={styles.modalCard}>
        <ul>
          <li>
            <img className={styles.modalImage} src={props.personInfo[0].image} alt="image" />
          </li>
          <li className={styles.modalList}>Dossier created: {props.personInfo[0].created}</li>
          <li className={styles.modalList}>
            id: <span className={styles.modalText}>{props.personInfo[0].id}</span>
          </li>
          <li className={styles.modalList}>
            Full name: <span className={styles.modalText}>{props.personInfo[0].name}</span>
          </li>
          <li className={styles.modalList}>
            Species: <span className={styles.modalText}>{props.personInfo[0].species}</span>
          </li>
          <li className={styles.modalList}>
            Status: <span className={styles.modalText}>{props.personInfo[0].status}</span>
          </li>
          <li className={styles.modalList}>
            Gender: <span className={styles.modalText}>{props.personInfo[0].gender}</span>
          </li>
          <li className={styles.modalList}>
            Location: <span className={styles.modalText}>{props.personInfo[0].location!.name}</span>
          </li>
          <li className={styles.modalList}>
            Origin location:{' '}
            <span className={styles.modalText}>{props.personInfo[0].origin!.name}</span>
          </li>
        </ul>
        <button
          className={styles.modalClose}
          onClick={handleClick}
          id="close-modal"
          data-testid="close-modal-card"
        ></button>
      </div>
    </div>
  );
};

export default CardModal;
