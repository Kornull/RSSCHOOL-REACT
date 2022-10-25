import React from 'react';

import { UseFormRegister } from 'react-hook-form';
import { StateFormUser } from '../Form';

import styles from '../Form.module.scss';

type SelectProps = {
  options: string[];
  register: UseFormRegister<StateFormUser>;
};

const Select = ({ options, register }: SelectProps) => {
  return (
    <>
      <select className={styles.formBlockSelect} {...register('location')}>
        <option>Unknown</option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
