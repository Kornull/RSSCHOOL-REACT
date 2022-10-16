import React, { Component } from 'react';

import { AboutCard, StatePerson } from '../../types/types';

import styles from './Card.module.scss';
import CardModal from '../../CardModal/CardModal';

class Card extends Component<AboutCard, StatePerson> {
  constructor(props: AboutCard) {
    super(props);
    this.state = {
      infoPerson: [],
      modalCondition: false,
    };
  }

  handleClick = () => {
    fetch(`${this.props.url}`)
      .then((response) => response.json())
      .then((data) => this.setState({ infoPerson: [data], modalCondition: true }));
    // this.setState({ infoPerson: fetch()  });
  };

  handleClickModal = (stateModal: boolean) => {
    this.setState({ modalCondition: stateModal });
  };

  render(): JSX.Element {
    const { id, status, name, species, gender, image, location }: Readonly<AboutCard> = this.props;
    return (
      <>
        <div
          id={`${id}`}
          className={styles.card}
          data-testid="person-card"
          onClick={this.handleClick}
        >
          <div className={styles.cardImage}>
            <img className={styles.cardImage} src={image} alt={name} />
          </div>
          <div className={styles.cardDescription}>
            <h3>Dossier :</h3>
            <ul className={styles.cardAboutList}>
              <li className={styles.cardAboutHero}>
                Name: <span className={styles.cardDossierText}>{name}</span>
              </li>

              <li className={styles.cardAboutHero}>
                Species: <span className={styles.cardDossierText}>{species}</span>
              </li>
              <li className={styles.cardAboutHero}>
                Gender: <span className={styles.cardDossierText}>{gender}</span>
              </li>
              <li className={styles.cardAboutHero}>
                Location:
                <span className={styles.cardDossierText}>
                  {location ? location.name : 'unknown'}
                </span>
              </li>
            </ul>
          </div>
          {this.state.modalCondition && (
            <CardModal {...this.state} onClickModal={this.handleClickModal} />
          )}
        </div>
      </>
    );
  }
}

export default Card;
