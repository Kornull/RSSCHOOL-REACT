import React, { Component } from 'react';

import { AboutCard } from '../../../pages/HomePage/HomePage';

import styles from './Card.module.scss';

class Card extends Component<AboutCard> {
  constructor(props: AboutCard) {
    super(props);
  }

  render(): JSX.Element {
    const { id, status, name, species, gender, image, location }: Readonly<AboutCard> = this.props;
    return (
      <div id={`${id}`} className={styles.card} data-testid="person-card">
        <div>
          <img className={styles.cardImage} src={image} alt={name} />
        </div>
        <div className={styles.cardDescription}>
          <h3>Dossier :</h3>
          <ul className={styles.cardAboutList}>
            <li className={styles.cardAboutHero}>
              Name: <span className={styles.cardDossierText}>{name}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Status: <span className={styles.cardDossierText}>{status}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Species: <span className={styles.cardDossierText}>{species}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Gender: <span className={styles.cardDossierText}>{gender}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Location:
              <span className={styles.cardDossierText}>{location ? location.name : 'unknown'}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
