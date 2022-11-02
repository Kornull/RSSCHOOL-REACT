import React, { useState, useEffect } from 'react';

import InputRadioSearch from './SearchForm/InputRadioSearch';
import InputSearch from './SearchForm/InputSearch';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataType, useSearchContext } from '../Hooks/';
import InputSearchPage from './SearchForm/InputSearchPage';
import ButtonSearch from './SearchForm/ButtonSearch';
import ButtonSearchCard from './SearchForm/ButtonSearchCard';

import styles from './Search.module.scss';

enum LocalStoreKey {
  keyStorage = 'SearchValues',
}

const Search = () => {
  const { stateSearch, setStateSearch } = useSearchContext();
  const [searchTerm, setSearch] = useState('');
  const [searchCard, setSearchCard] = useState('');
  const { register, handleSubmit } = useForm<FormDataType>({
    mode: 'onBlur',
  });

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handelChangeCard = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchCard(event.target.value);
  };

  const clearSearchCars = () => {
    setStateSearch({
      ...stateSearch,
      searchCard: '',
    });
    setSearchCard('');
  };

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    setStateSearch({ ...stateSearch, ...data });
  };

  useEffect(() => {
    const value = localStorage.getItem(LocalStoreKey.keyStorage);

    if (value) setSearch(value);
    return localStorage.setItem(LocalStoreKey.keyStorage, '');
  }, []);

  useEffect(() => {
    return localStorage.setItem(LocalStoreKey.keyStorage, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setStateSearch({
      ...stateSearch,
      page: '1',
    });
  }, [stateSearch.type, stateSearch.valueSearch]);

  useEffect(() => {
    setStateSearch({
      ...stateSearch,
    });
  }, [stateSearch.searchCard]);

  return (
    <div className={styles.search}>
      <form
        className={styles.searchForm}
        data-testid="form-search"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputSearch searchChange={handelChange} searchButton={searchTerm} register={register} />
        <InputSearchPage
          searchChange={handelChangeCard}
          searchButton={searchCard}
          register={register}
        />
        <div className={styles.searchRadioBlock}>
          <InputRadioSearch register={register} name="all" searchButton={stateSearch} />
          <InputRadioSearch register={register} name="status" searchButton={stateSearch} />
          <InputRadioSearch register={register} name="species" searchButton={stateSearch} />
        </div>
        <ButtonSearch clickButton={clearSearchCars} />
        <ButtonSearchCard />
      </form>
    </div>
  );
};
export default Search;
