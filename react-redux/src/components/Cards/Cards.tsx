// import { useCardContext } from 'components/Hooks/ContextCards';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { AboutCard } from '../types/types';
import styles from './Cards.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

let newCards: AboutCard[] = [];

const Cards = () => {
  const cards = useAppSelector((state) => state.cards.cards);

  const [sortCard, setSortCard] = useState<AboutCard[]>([]);
  setTimeout(() => {
    console.log(cards);
  }, 1500);
  useEffect(() => {
    newCards = [];

    console.log('cardsCARDS');
    // if (!newCards.length && stateSearch.searchCard.length) {
    // newCards = cards.results.filter((card) =>
    // card.name.toLowerCase().includes(stateSearch.searchCard.toLowerCase())
    // );
    // setSortCard(newCards);
    // } else {
    setSortCard(cards.results);
    // }
  }, [cards]);

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
