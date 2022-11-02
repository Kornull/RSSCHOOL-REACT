import React, { useState } from 'react';

import { AboutCard } from '../../types/types';
import PersonCard from '../../PersonCard/PersonCard';

import styles from './Card.module.scss';

const Card = (props: AboutCard) => {
  const [personInfo, setPersonInfo] = useState<Array<AboutCard>>([]);
  const [personCondition, setPersonCondition] = useState(false);
  const handleClick = (): void => {
    setPersonInfo([props]);
    setPersonCondition(true);
  };

  const handleClickModal = (stateModal: boolean): void => {
    setPersonCondition(stateModal);
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
        {personCondition && (
          <PersonCard
            personInfo={personInfo}
            personCondition={personCondition}
            onClickModal={handleClickModal}
          />
        )}
      </div>
    </>
  );
};

export default Card;
