import React, { Component } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <nav>
            <ul className={styles.headerNavigate}>
              <li className={styles.headerNavigateLink}>
                <NavLink className={styles.headerPageLink} to="/" end>
                  Main
                </NavLink>
              </li>
              <li className={styles.headerNavigateLink}>
                <NavLink className={styles.headerPageLink} to="/about" end>
                  About us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
