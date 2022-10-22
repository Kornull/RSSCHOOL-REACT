import React, { useState } from 'react';

import { AboutCard } from '../../types/types';

import CardModal from '../../CardModal/CardModal';
import styles from './Card.module.scss';

const Card = (props: AboutCard): JSX.Element => {
  const [personInfo, setPersonInfo] = useState<Array<AboutCard>>([]);
  const [modalCondition, setModalCondition] = useState(false);

  const handleClick = () => {
    setPersonInfo([props]);
    setModalCondition(true);
  };

  const handleClickModal = (stateModal: boolean): void => {
    setModalCondition(stateModal);
  };

  return (
    <>
      <div
        id={`${props.id}`}
        className={styles.card}
        data-testid="person-card"
        onClick={handleClick}
      >
        <div className={styles.cardImage}>
          <img className={styles.cardImage} src={props.image} alt={props.name} />
        </div>
        <div className={styles.cardDescription}>
          <h3>Dossier :</h3>
          <ul className={styles.cardAboutList}>
            <li className={styles.cardAboutHero}>
              Name: <span className={styles.cardDossierText}>{props.name}</span>
            </li>

            <li className={styles.cardAboutHero}>
              Species: <span className={styles.cardDossierText}>{props.species}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Gender: <span className={styles.cardDossierText}>{props.gender}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Location:
              <span className={styles.cardDossierText}>
                {props.location ? props.location.name : 'unknown'}
              </span>
            </li>
          </ul>
        </div>
        {modalCondition && (
          <CardModal
            personInfo={personInfo}
            modalCondition={modalCondition}
            onClickModal={handleClickModal}
          />
        )}
      </div>
    </>
  );
};

export default Card;
