import React, { FormEvent, useState, useEffect } from 'react';

import IconSVG from '../../image/icon-search.svg';
import styles from './Search.module.scss';

enum LocalStoreKey {
  keyStorage = 'SearchValues',
}

type SearchProps = {
  searchName: (name: string) => void;
};

const Search = (props: SearchProps) => {
  const [searchTerm, setSearch] = useState('');

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSearch = (ev: FormEvent): void => {
    ev.preventDefault();
    props.searchName(searchTerm);
  };

  useEffect(() => {
    const value = localStorage.getItem(LocalStoreKey.keyStorage);

    if (value) setSearch(value);
    return localStorage.setItem(LocalStoreKey.keyStorage, '');
  }, []);

  useEffect(() => {
    return localStorage.setItem(LocalStoreKey.keyStorage, searchTerm);
  }, [searchTerm]);

  return (
    <div className={styles.search}>
      <form className={styles.searchForm} data-testid="form-search" onSubmit={handleSearch}>
        <input
          className={styles.searchInput}
          data-testid="search-cards"
          name="search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          autoComplete="off"
          onChange={handelChange}
        />
        <button>
          <svg className={styles.searchIcon} data-testid="button-search">
            <use xlinkHref={`${IconSVG}#icon-search`} />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
