import React, { Component } from 'react';
import { AboutCard } from '../../pages/HomePage/HomePage';
import Card from './Card';
import styles from './Cards.module.scss';

type CardsProps = {
  cardList: AboutCard[];
};

class Cards extends Component<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }

  render(): JSX.Element {
    const { cardList = [] } = this.props;
    return (
      <div className={styles.CardsBlock}>
        {cardList.length ? (
          cardList.map((card) => <Card key={card.id} {...card} />)
        ) : (
          <h3>Nothing found</h3>
        )}
      </div>
    );
  }
}

export default Cards;
