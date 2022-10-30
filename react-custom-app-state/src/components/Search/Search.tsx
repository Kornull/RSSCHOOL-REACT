import React, { useState, useEffect } from 'react';

import IconSVG from '../../image/icon-search.svg';
import styles from './Search.module.scss';
import InputRadioSearch from './SearchForm/InputRadioSearch';
import InputSearch from './SearchForm/InputSearch';

import { formset, useSearchContext } from 'components/Hooks/ContextCards';

import { SubmitHandler, useForm } from 'react-hook-form';

enum LocalStoreKey {
  keyStorage = 'SearchValues',
}

const Search = () => {
  const [searchTerm, setSearch] = useState('');
  const { register, handleSubmit } = useForm<formset>({
    mode: 'onBlur',
  });
  const { stateSearch, dispatch } = useSearchContext();

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(searchTerm);
    event.preventDefault();
    setSearch(event.target.value);
  };

  const onSubmit: SubmitHandler<formset> = (data) => {
    dispatch(data);
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputSearch register={register} searchChange={handelChange} searchButton={searchTerm} />
        <InputRadioSearch register={register} name="all" searchButton={stateSearch} />
        <InputRadioSearch register={register} name="status" searchButton={stateSearch} />
        <InputRadioSearch register={register} name="species" searchButton={stateSearch} />
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
