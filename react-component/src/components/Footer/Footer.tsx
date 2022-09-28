import React, { Component } from 'react';
import styles from './Footer.module.scss';

export enum TextFooter {
  textFooter = '© by Kornull 2022',
}

class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <div className={styles.FooterContainer}>
          <p>{TextFooter.textFooter}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
