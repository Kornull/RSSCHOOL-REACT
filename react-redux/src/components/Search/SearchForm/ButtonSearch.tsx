import React from 'react';

import IconSVG from '../../../image/icon-search.svg';
import styles from '../Search.module.scss';

type ButtonSearchProps = {
  onClick: () => void;
};

const ButtonSearch = ({ onClick }: ButtonSearchProps) => {
  return (
    <button type="submit" className={styles.searchButton} onClick={onClick} title="search name">
      <svg className={styles.searchIcon} data-testid="button-search">
        <use xlinkHref={`${IconSVG}#icon-search`} />
      </svg>
    </button>
  );
};

export default ButtonSearch;
