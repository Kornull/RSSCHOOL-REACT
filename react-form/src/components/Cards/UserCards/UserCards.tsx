import React, { Component } from 'react';

import { CardMenu } from '../../Form/Form';
import UserCard from './UserCard';
import styles from '../Cards.module.scss';

type UserProps = {
  cards?: CardMenu[];
};

class UserCards extends Component<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }

  render() {
    const { cards } = this.props;
    return (
      <div className={styles.cardsBlock} data-testid="user-cards">
        {cards ? cards.map((card) => <UserCard key={card.lastName} {...card} />) : null}
      </div>
    );
  }
}

export default UserCards;
