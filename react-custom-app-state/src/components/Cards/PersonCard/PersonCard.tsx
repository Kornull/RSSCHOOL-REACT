import React from 'react';
import { AboutCard } from '../../types/types';

import PersonList from './PersonList/PersonList';

import styles from './PersonCard.module.scss';
import { useCardContext } from '../../Hooks';
import { useNavigate } from 'react-router-dom';

enum PersonClose {
  closeId = 'modal-close',
}

const PersonCard = () => {
  const { cards, setCards } = useCardContext();
  const navigate = useNavigate();

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    ev.stopPropagation();
    navigate(-1);
    setCards({
      ...cards,
      viewPersonCard: false,
    });
  };

  const personInfo = cards.results!.find(
    (card) => card.id.toString() === cards.personId
  ) as AboutCard;

  return (
    <div className={styles.person} id={PersonClose.closeId} data-testid="modal-card">
      <div className={styles.personCard} data-testid="describe-card">
        <ul>
          <li>
            <img className={styles.personImage} src={personInfo.image} alt="image" />
          </li>
          <PersonList title="Dossier created" describe={personInfo.created} />
          <PersonList title="ID" describe={personInfo.id} />
          <PersonList title="Full name" describe={personInfo.name} />
          <PersonList title="Species" describe={personInfo.species} />
          <PersonList title="Status" describe={personInfo.status} />
          <PersonList title="Gender" describe={personInfo.gender} />
          <PersonList title="Location" describe={personInfo.location!.name} />
          <PersonList title="Origin location" describe={personInfo.origin!.name} />
        </ul>
        <button
          className={styles.personClose}
          onClick={handleClick}
          id={PersonClose.closeId}
          data-testid="close-modal-card"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default React.memo(PersonCard);
