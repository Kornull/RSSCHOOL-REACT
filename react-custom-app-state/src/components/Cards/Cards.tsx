import { useCardContext } from 'components/Hooks/ContextCards';
import React, { useEffect, useState } from 'react';

import Card from './Card';

import styles from './Cards.module.scss';
import { useSearchContext } from '../Hooks';
import { AboutCard } from '../types/types';

let newCards: AboutCard[] = [];

const Cards = () => {
  const { cards } = useCardContext();
  const { stateSearch } = useSearchContext();
  const [sortCard, setSortCard] = useState<AboutCard[]>([]);

  newCards = cards.results ? cards.results : [];

  useEffect(() => {
    if (Array.isArray(cards.results)) {
      if (newCards.length && stateSearch.searchCard.length) {
        newCards = [];
        cards.results.forEach((card) => {
          if (card.name.toLowerCase().includes(stateSearch.searchCard.toLowerCase())) {
            newCards.push(card);
          }
        });
        setSortCard(newCards);
      } else {
        newCards = [];
        cards.results.forEach((card) => newCards.push(card));
      }
    }
    return () => setSortCard(newCards);
  }, [cards.results, stateSearch.searchCard]);

  return (
    <div className={styles.cardsBlock}>
      {sortCard.length ? (
        sortCard.map((card) => <Card key={card.id} {...card} />)
      ) : (
        <h3 data-testid="error-text">Nothing found</h3>
      )}
    </div>
  );
};

export default Cards;
