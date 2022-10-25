import React from 'react';

import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { StateFormUser } from '../Form';
import { RegExpImageValidation } from '../../template/constants';

import styles from '../Form.module.scss';

type InputLoadProps = {
  watch: UseFormWatch<StateFormUser>;
  register: UseFormRegister<StateFormUser>;
  image: string;
};

const InputLoadFile = ({ watch, register, image }: InputLoadProps) => {
  !watch('files') || watch('files').length === 0
    ? console.log('hui')
    : console.log(Object(watch('files')[0]).name);
  console.log(image);
  return (
    <>
      <div className={styles.blockImageCard}>
        <label className={styles.formBlockLabelFileButton} htmlFor="input__file">
          Choice image
          <input
            className={styles.formBlockFile}
            id="input__file"
            type="file"
            data-testid="input-image"
            {...register('files', { pattern: RegExpImageValidation })}
          />
        </label>
        {!watch('files') || watch('files').length === 0 ? (
          <div className={styles.TextLoad}>Load file</div>
        ) : (
          <div className={styles.TextLoad}>{Object(watch('files')[0]).name}</div>
        )}
      </div>
    </>
  );
};

export default InputLoadFile;
