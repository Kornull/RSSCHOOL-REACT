import { useCardContext } from 'components/Hooks/ContextCards';
import React, { useEffect, useState } from 'react';

import Card from './Card';
import { useSearchContext } from '../Hooks';
import { AboutCard } from '../types/types';

import styles from './Cards.module.scss';

let newCards: AboutCard[] = [];

const Cards = () => {
  const { cards } = useCardContext();
  const { stateSearch } = useSearchContext();
  const [sortCard, setSortCard] = useState<AboutCard[]>([]);

  useEffect(() => {
    newCards = [];
    if (Array.isArray(cards.results)) {
      if (!newCards.length && stateSearch.searchCard.length) {
        newCards = cards.results.filter((card) =>
          card.name.toLowerCase().includes(stateSearch.searchCard.toLowerCase())
        );
        setSortCard(newCards);
      } else {
        setSortCard(cards.results);
      }
    }
  }, [cards.results, stateSearch.searchCard, stateSearch.valueSearch]);

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
