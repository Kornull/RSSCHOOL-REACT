import React from 'react';

import { FormInputsProps } from '../../types/types';
import styles from '../Form.module.scss';

const InputCheckbox = ({ register, error }: FormInputsProps) => {
  return (
    <>
      <label className={styles.formBlockCheckbox}>
        I agree with the conditions
        <input type="checkbox" data-testid="checkbox-button" {...register('checkbox')} />
        {error.checkbox && (
          <span className={styles.formBlockErrorText} data-testid="error-text">
            You must agree to the terms
          </span>
        )}
      </label>
    </>
  );
};

export default InputCheckbox;
