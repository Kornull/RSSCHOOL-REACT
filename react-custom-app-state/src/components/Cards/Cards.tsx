import { useCardContext } from 'components/Hooks/ContextCards';
import React from 'react';

import Card from './Card';

import styles from './Cards.module.scss';

const Cards = () => {
  const { cards } = useCardContext();
  const allCards = cards.results ? cards.results : [];
  return (
    <div className={styles.cardsBlock}>
      {allCards.length ? (
        cards.results.map((card) => <Card key={card.id} {...card} />)
      ) : (
        <h3 data-testid="error-text">Nothing found</h3>
      )}
    </div>
  );
};

export default Cards;
