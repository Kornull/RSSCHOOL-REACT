import React from 'react';

import { FormInputsProps } from '../../types/types';

import styles from '../Form.module.scss';

const InputLastName = ({ register, error, onChange }: FormInputsProps) => {
  return (
    <>
      <label className={styles.labelContainer}>
        Last name
        <input
          className={styles.formBlockInput}
          type="text"
          autoComplete="disabled"
          {...register('lastName', {
            required: true,
            onChange: onChange,
            minLength: {
              value: 3,
              message: 'At least 3 characters',
            },
          })}
          data-testid="last-name"
        />
        {error.lastName && (
          <span className={styles.formBlockErrorText} data-testid="error-text">
            {error.lastName.message || 'Please fill in the field'}
          </span>
        )}
      </label>
    </>
  );
};

export default InputLastName;
