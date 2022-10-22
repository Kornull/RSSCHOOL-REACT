import React, { FormEvent, useState, useEffect } from 'react';

import IconSVG from '../../image/icon-search.svg';
import styles from './Search.module.scss';

enum LocalStoreKey {
  keyStorage = 'SearchValues',
}

type SearchProps = {
  searchName: (name: string) => void;
};

const Search = (props: SearchProps): JSX.Element => {
  const [search, setSearch] = useState('');

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSearch = (ev: FormEvent): void => {
    ev.preventDefault();
    props.searchName(search);
  };

  //Loading search text from localStore
  useEffect(() => {
    const value = localStorage.getItem(LocalStoreKey.keyStorage);

    if (value) setSearch(value);
    return localStorage.setItem(LocalStoreKey.keyStorage, '');
  }, []);

  //update search localStore
  useEffect(() => {
    return localStorage.setItem(LocalStoreKey.keyStorage, search);
  }, [search]);

  return (
    <div className={styles.search}>
      <form className={styles.searchForm} data-testid="form-search" onSubmit={handleSearch}>
        <input
          className={styles.searchInput}
          data-testid="search-cards"
          name="search"
          type="text"
          placeholder="Search..."
          value={search}
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
