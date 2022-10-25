import React from 'react';

import { FormInputsProps } from '../../types/types';

import { RegExpEmailValidation } from '../../template/constants';

import styles from '../Form.module.scss';

const InputEmail = ({ register, error, onChange }: FormInputsProps) => {
  return (
    <>
      <label className={styles.labelContainer}>
        Email
        <input
          className={styles.formBlockInput}
          type="text"
          autoComplete="disabled"
          {...register('email', {
            required: true,
            onChange: onChange,
            pattern: RegExpEmailValidation,
          })}
          data-testid="input-email"
        />
        {error.email && (
          <span className={styles.formBlockErrorText} data-testid="error-text">
            {'Please enter valid email "ww@ww.ww"'}
          </span>
        )}
      </label>
    </>
  );
};

export default InputEmail;
