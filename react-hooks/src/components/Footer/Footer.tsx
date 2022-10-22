import React from 'react';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.footerContainer}>
        <p>© by Kornull 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
