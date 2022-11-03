import React from 'react';

import IconSVG from '../../../image/icon-search.svg';
import styles from '../Search.module.scss';

const ButtonSearchCard = () => {
  return (
    <>
      <button type="submit" className={styles.searchButtonCard}>
        <svg className={styles.searchIconCard} data-testid="button-search">
          <use xlinkHref={`${IconSVG}#icon-search`} />
        </svg>
      </button>
    </>
  );
};

export default ButtonSearchCard;
