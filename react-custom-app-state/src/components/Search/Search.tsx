import React, { FormEvent, useState, useEffect, useReducer } from 'react';

import IconSVG from '../../image/icon-search.svg';
import styles from './Search.module.scss';
import InputRadioSearch from './SearchForm/InputRadioSearch';
import InputSearch from './SearchForm/InputSearch';
import reducerSearch, { Inicialized, TextActionKind } from './Search.utils';

enum LocalStoreKey {
  keyStorage = 'SearchValues',
}

type SearchProps = {
  searchName: (name: string) => void;
};

const Search = (props: SearchProps) => {
  const [searchTerm, setSearch] = useState('');
  const [radioButton, setRadioButton] = useState('all');
  const [, dispatch] = React.useReducer(reducerSearch, Inicialized);

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSearch = (ev: FormEvent): void => {
    ev.preventDefault();
    props.searchName(searchTerm);
  };
  const handleClick = (name: string) => {
    console.log(name);
    console.log(radioButton);
    setRadioButton(name);
    setTimeout(() => {
      console.log(radioButton);
    }, 1500);
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
      <form
        className={styles.searchForm}
        data-testid="form-search"
        onSubmit={handleSearch}
        onClick={() => dispatch({ type: radioButton, valueSearch: searchTerm })}
      >
        <InputSearch searchChange={handelChange} searchText={searchTerm} />
        <InputRadioSearch name={TextActionKind.BREAKPOINT_ALL} clickButton={handleClick} />
        <InputRadioSearch name={TextActionKind.BREAKPOINT_SPECIES} clickButton={handleClick} />
        <InputRadioSearch name={TextActionKind.BREAKPOINT_STATUS} clickButton={handleClick} />
        <button type="submit">
          <svg className={styles.searchIcon} data-testid="button-search">
            <use xlinkHref={`${IconSVG}#icon-search`} />
          </svg>
        </button>
      </form>
    </div>
  );
};
export default Search;
