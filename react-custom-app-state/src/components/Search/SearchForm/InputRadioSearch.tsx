import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormDataType } from '../../Hooks';
import styles from '../Search.module.scss';

type InputSearchData = {
  name: string;
  searchButton: FormDataType;
  register: UseFormRegister<FormDataType>;
};
const InputRadioSearch = ({ name, register, searchButton }: InputSearchData) => {
  return (
    <>
      <label htmlFor={name}>
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
        <input
          className={styles.searchRadioInput}
          id={name}
          {...register('type', { required: true })}
          type="radio"
          value={name}
          defaultChecked={name === searchButton.type}
        />
      </label>
    </>
  );
};

export default InputRadioSearch;
