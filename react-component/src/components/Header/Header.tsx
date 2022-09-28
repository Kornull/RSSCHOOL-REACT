import React, { Component } from 'react';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <nav>
            <ul className={styles.headerNavigate}>
              <li className={styles.headerNavigateLink}>
                <a className={styles.headerPageLink} href="/">
                  Main
                </a>
              </li>
              <li className={styles.headerNavigateLink}>
                <a className={styles.headerPageLink} href="/">
                  About us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
