import React from 'react';
import styles from '../Search.module.scss';
import IconSVG from '../../../image/icon-search.svg';

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
