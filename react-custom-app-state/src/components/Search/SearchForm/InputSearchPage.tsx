import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styles from '../Search.module.scss';
import { FormDataType } from '../../Hooks';

type SearchProps = {
  searchChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  searchButton: string;
  register: UseFormRegister<FormDataType>;
};

const InputSearchPage = ({ searchChange, searchButton, register }: SearchProps) => {
  return (
    <>
      <input
        className={styles.searchInput}
        data-testid="search-cards"
        value={searchButton}
        type="text"
        {...register('searchCard', { required: false, onChange: searchChange })}
        placeholder="Search card..."
        autoComplete="off"
      />
    </>
  );
};

export default InputSearchPage;
