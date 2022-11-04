import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import { useCardContext } from '../Hooks';

const Header = () => {
  const { cards } = useCardContext();

  const handleClick = () => {
    cards.viewPersonCard = false;
  };

  return (
    <header className={styles.header} data-testid="header-component">
      <div className={styles.headerContainer}>
        <nav>
          <ul className={styles.headerNavigate} data-testid="navigation-list">
            <li onClick={handleClick}>
              <NavLink className={styles.headerPageLink} end to="/">
                Main
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className={styles.headerPageLink} end to="about">
                About us
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className={styles.headerPageLink} end to="user-form">
                Form
              </NavLink>
            </li>
            {cards.viewPersonCard && (
              <li data-testid="link-person">
                <NavLink className={styles.headerPageLink} end to={`person-${cards.personId}`}>
                  Person
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
