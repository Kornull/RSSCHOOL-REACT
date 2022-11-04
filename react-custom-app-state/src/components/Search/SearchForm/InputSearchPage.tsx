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
        className={styles.searchInputCard}
        data-testid="search-cards-page"
        value={searchButton}
        type="text"
        {...register('searchCard', { required: false, onChange: searchChange })}
        placeholder="Page search..."
        autoComplete="off"
      />
    </>
  );
};

export default InputSearchPage;
