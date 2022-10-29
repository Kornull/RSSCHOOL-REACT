import { type } from '@testing-library/user-event/dist/type';
import React, { ChangeEvent, Dispatch } from 'react';
import styles from '../Search.module.scss';
import { TextAction } from '../Search.utils';

type SearchProps = {
  searchChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
};

const InputSearch = ({ searchChange, searchText }: SearchProps) => {
  return (
    <>
      <input
        className={styles.searchInput}
        data-testid="search-cards"
        name="search"
        type="text"
        value={searchText}
        placeholder="Search..."
        autoComplete="off"
        onChange={searchChange}
      />
    </>
  );
};

export default InputSearch;
