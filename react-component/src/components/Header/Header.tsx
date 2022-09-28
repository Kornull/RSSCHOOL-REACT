import React, { Component } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <div className={styles.HeaderContainer}>
          <nav>
            <ul className={styles.HeaderNavigate} data-testid="nav-list">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.HeaderPageLinkActive : styles.HeaderPageLink
                  }
                  end
                  to="/"
                >
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.HeaderPageLinkActive : styles.HeaderPageLink
                  }
                  end
                  to="/about"
                >
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
