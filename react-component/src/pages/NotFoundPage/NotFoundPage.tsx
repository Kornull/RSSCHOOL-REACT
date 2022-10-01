import React, { Component } from 'react';
import NotFoundPng from '../../image/not-found.png';

import styles from './NotFoundPage.module.scss';

class NotFoundPage extends Component {
  render() {
    return (
      <div className={styles.NotPage}>
        <img className={styles.NotPageImg} src={NotFoundPng} alt="not-found" />
        <p>Page not found</p>
        <p>Select an item from the menu for further viewing</p>
      </div>
    );
  }
}

export default NotFoundPage;
