import React from 'react';
import { AboutCard } from '../types/types';

import PersonList from './PersonList/PersonList';

import styles from './PersonCard.module.scss';

enum PersonClose {
  closeId = 'modal-close',
}

export type ModalProps = {
  personInfo: AboutCard[];
  modalCondition: boolean;
  onClickModal: (stateModal: boolean) => void;
};

const PersonCard = ({ personInfo, modalCondition, onClickModal }: ModalProps) => {
  const handleClick = (ev: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
    ev.stopPropagation();
    const element = ev.target as HTMLElement;
    if (element.id) onClickModal(!modalCondition);
  };

  const renderPersonCard = () => {};
  return (
    <div
      className={styles.person}
      onClick={handleClick}
      id={PersonClose.closeId}
      data-testid="modal-card"
    >
      <div className={styles.personCard} data-testid="describe-card">
        <ul>
          <li>
            <img className={styles.personImage} src={personInfo[0].image} alt="image" />
          </li>
          <PersonList title="Dossier created" describe={personInfo[0].created} />
          <PersonList title="ID" describe={personInfo[0].id} />
          <PersonList title="Full name" describe={personInfo[0].name} />
          <PersonList title="Species" describe={personInfo[0].species} />
          <PersonList title="Status" describe={personInfo[0].status} />
          <PersonList title="Gender" describe={personInfo[0].gender} />
          <PersonList title="Location" describe={personInfo[0].location!.name} />
          <PersonList title="Origin location" describe={personInfo[0].origin!.name} />
        </ul>
        <button
          className={styles.personClose}
          onClick={handleClick}
          id={PersonClose.closeId}
          data-testid="close-modal-card"
        ></button>
      </div>
    </div>
  );
};

export default PersonCard;
