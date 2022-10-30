import { formset } from 'components/Hooks/ContextCards';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styles from '../Search.module.scss';

type SearchProps = {
  searchChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  searchButton: string;
  register: UseFormRegister<formset>;
};

const InputSearch = ({ searchChange, searchButton, register }: SearchProps) => {
  return (
    <>
      <input
        className={styles.searchInput}
        data-testid="search-cards"
        value={searchButton}
        type="text"
        {...register('valueSearch', { required: true, onChange: searchChange })}
        placeholder="Search..."
        autoComplete="off"
      />
    </>
  );
};

export default InputSearch;
