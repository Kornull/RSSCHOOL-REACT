import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header} data-testid="header-component">
      <div className={styles.headerContainer}>
        <nav>
          <ul className={styles.headerNavigate} data-testid="navigation-list">
            <li>
              <NavLink className={styles.headerPageLink} end to="/">
                Main
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.headerPageLink} end to="about">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.headerPageLink} end to="user-form">
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
