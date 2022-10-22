import React from 'react';

import { AboutCard } from '../types/types';
import Card from './Card';

import styles from './Cards.module.scss';

type CardsProps = {
  cardList?: AboutCard[];
};

const Cards = (props: CardsProps): JSX.Element => {
  const { cardList = [] } = props;
  return (
    <div className={styles.cardsBlock}>
      {cardList.length ? (
        cardList.map((card) => <Card key={card.id} {...card} />)
      ) : (
        <h3 data-testid="error-text">Nothing found</h3>
      )}
    </div>
  );
};

export default Cards;
