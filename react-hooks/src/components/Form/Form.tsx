import React, { ChangeEvent, Component, FormEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { planetsArray } from '../template/constants';
import UserCards from '../Cards/UserCards';

import styles from './Form.module.scss';
import InputFirstName from './FormInputs/InputFirstName';
import InputLastName from './FormInputs/InputLastName';
import InputEmail from './FormInputs/InputEmail';
import InputGender from './FormInputs/InputGender';
import Select from './FormInputs/Select';
import InputLoadFile from './FormInputs/InputLoadFile';
import InputCheckbox from './FormInputs/InputCheckbox';

export type CardMenu = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
  location: string;
};

export type StateFormUser = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  location: string;
  files: string;
  checkbox: boolean;
};
let userCards: CardMenu[] = [];
let userCard: CardMenu[] = [];

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<StateFormUser>({
    mode: 'onBlur',
  });
  const [image, setImage] = useState('');

  const fileLoad = (file: string) => {
    const newLinkImage = new Blob([file]);
    setImage(URL.createObjectURL(newLinkImage));
    console.log(image);
  };

  const onSubmit: SubmitHandler<StateFormUser> = (data): void => {
    console.log(data);
    if (data.files.length > 0) {
      fileLoad(data.files[0]);
    }
    userCard = [
      {
        firstName: data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1),
        lastName: data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1),
        email: data.email,
        gender: data.gender,
        image: image,
        location: data.location,
      },
    ];
    userCards = [...userCards, ...userCard];

    reset();
  };
  useEffect(() => {
    if (image) userCard[0].image = image;
    return () => setImage('');
  }, [image]);
  return (
    <>
      <div className={styles.formBlock}>
        <form
          className={styles.formBlockUseForm}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          data-testid="form-user"
        >
          <InputFirstName register={register} error={errors} />
          <InputLastName register={register} error={errors} />
          <InputEmail register={register} error={errors} />
          <InputGender register={register} error={errors} />
          <Select options={planetsArray} register={register} />
          <InputLoadFile register={register} watch={watch} image={image} />
          <InputCheckbox register={register} error={errors} />
          <input
            type="submit"
            className={styles.formBlockButtonSubmit}
            // disabled={!isValid}
            data-testid="button-submit"
          />
        </form>
      </div>
      {userCards.length ? <UserCards cards={userCards} /> : null}
    </>
  );
};

export default Form;
