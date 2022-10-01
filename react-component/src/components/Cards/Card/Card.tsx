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
      <div id={`${id}`} className={styles.Card}>
        <div>
          <img className={styles.CardImage} src={image} alt={name} />
        </div>
        <div className={styles.CardDescription}>
          <h3>Dossier :</h3>
          <ul className={styles.CardAboutList}>
            <li className={styles.CardAboutHero}>
              Name: {<span className={styles.CardDossierText}>{name}</span>}
            </li>
            <li className={styles.CardAboutHero}>
              Status: {<span className={styles.CardDossierText}>{status}</span>}
            </li>
            <li className={styles.CardAboutHero}>
              Species: {<span className={styles.CardDossierText}>{species}</span>}
            </li>
            <li className={styles.CardAboutHero}>
              Gender: {<span className={styles.CardDossierText}>{gender}</span>}
            </li>
            <li className={styles.CardAboutHero}>
              Location:
              {
                <span className={styles.CardDossierText}>
                  {location ? location.name : 'unknown'}
                </span>
              }
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
