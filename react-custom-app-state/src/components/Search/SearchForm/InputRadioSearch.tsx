import { formset } from 'components/Hooks/ContextCards';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type A = {
  name: string;
  searchButton: formset;
  register: UseFormRegister<formset>;
};
const InputRadioSearch = ({ name, register, searchButton }: A) => {
  return (
    <>
      <label htmlFor={name}>
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
        <input
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
