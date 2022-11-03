import React from 'react';

import IconSVG from '../../../image/icon-search.svg';
import styles from '../Search.module.scss';

type ButtonClick = {
  clickButton: () => void;
};

const ButtonSearch = ({ clickButton }: ButtonClick) => {
  return (
    <>
      <button type="submit" className={styles.searchButton} onClick={clickButton}>
        <svg className={styles.searchIcon} data-testid="button-search">
          <use xlinkHref={`${IconSVG}#icon-search`} />
        </svg>
      </button>
    </>
  );
};

export default ButtonSearch;
