import React, { Dispatch, useState } from 'react';
import { deflateRaw } from 'zlib';
import { TextAction } from '../Search.utils';

type A = {
  name: string;
  clickButton: (name: string) => void;
};
const InputRadioSearch = ({ name, clickButton }: A) => {
  return (
    <>
      <label htmlFor={name}>
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
        <input id={name} name="type" type="radio" onClick={() => clickButton(name)} />
      </label>
    </>
  );
};
export default InputRadioSearch;
