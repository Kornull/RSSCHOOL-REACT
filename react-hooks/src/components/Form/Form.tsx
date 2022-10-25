import React, { ChangeEvent, Component, FormEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RegExpEmailValidation, planetsArray, RegExpImageValidation } from '../template/constants';
import UserCards from '../Cards/UserCards';

import styles from './Form.module.scss';
import InputFirstName from './FormInputs/InputFirstName';
import { AboutCard } from '../types/types';
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

// export type StateForm = {
//   userCards: CardMenu[];
//   buttonDisabled: boolean;
//   imageUser: string;
//   email: boolean;
//   lastName: boolean;
//   firstName: boolean;
//   gender: boolean;
//   checkbox: boolean;
//   image: boolean;
// };

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
    setTimeout(() => {
      reset();
    }, 2000);
  };

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
          {/*
          <div className={styles.blockImageCard}>
            <label className={styles.formBlockLabelFileButton} htmlFor="input__file">
              Choice image
              <input
                className={styles.formBlockFile}
                id="input__file"
                type="file"
                ref={file}
                onChange={isUploadFile}
                data-testid="input-image"
              />
            </label>
            {imageUser ? (
              <div className={styles.imageBlock}>
                <img
                  className={styles.imagePrev}
                  src={imageUser}
                  alt=""
                  data-testid="image-block"
                />
              </div>
            ) : (
              <div className={styles.imageBlock}></div>
            )}
          </div> */}
          {/* <label className={styles.formBlockCheckbox}>
            I agree with the conditions
            <input
              type="checkbox"
              name="checkbox"
              autoComplete="disabled"
              ref={checkbox}
              onChange={isDisabledValidation}
              data-testid="checkbox-button"
            />
            {checkbox ? null : (
              <span className={styles.formBlockErrorText} data-testid="error-text">
                You must agree to the terms
              </span>
            )}
          </label> */}
          <input
            type="submit"
            className={styles.formBlockButtonSubmit}
            disabled={!isValid}
            data-testid="button-submit"
          />
        </form>
      </div>
      {/* {userCards.length ? <UserCards cards={userCards} /> : null} */}
    </>
  );
};

export default Form;
// private firstName = React.createRef<HTMLInputElement>();
// private lastName = React.createRef<HTMLInputElement>();
// private email = React.createRef<HTMLInputElement>();
// private genderMale = React.createRef<HTMLInputElement>();
// private genderFemale = React.createRef<HTMLInputElement>();
// private file = React.createRef<HTMLInputElement>();
// private checkbox = React.createRef<HTMLInputElement>();
// private select = React.createRef<HTMLSelectElement>();
// private form = React.createRef<HTMLFormElement>();

// state: StateForm = {
//   userCards: [],
//   buttonDisabled: true,
//   imageUser: '',
//   email: true,
//   lastName: true,
//   firstName: true,
//   gender: true,
//   checkbox: true,
//   image: false,
// };

// isDisabledValidation = (ev: ChangeEvent | FormEvent): void => {
//   setState({ buttonDisabled: false });
//   const element = ev.target as HTMLInputElement;
//   if (element.value.length >= 1) {
//     setState({ [element.name]: true });
//   }
//   if (element.checked) {
//     setState({ [element.name]: true });
//   }
// };

// isUploadFile = () => {
//   if (file.current?.files && file.current?.files[0]) {
//     const userImage = file.current?.files[0].name;
//     if (userImage !== undefined && RegExpImageValidation.test(userImage)) {
//       setState({ imageUser: URL.createObjectURL(file.current.files[0]) });
//       setState({ image: true, buttonDisabled: false });
//     }
//   }
// };

// handleSubmit = (ev: FormEvent): void => {
//   ev.preventDefault();
//   if (
//     email.current &&
//     lastName.current &&
//     firstName.current &&
//     genderFemale.current &&
//     genderMale.current &&
//     checkbox.current &&
//     select.current
//   ) {
//     if (firstName.current.value.length < 3) {
//       setState({ firstName: false, buttonDisabled: true });
//       return;
//     } else if (lastName.current.value.length < 3) {
//       setState({ lastName: false, buttonDisabled: true });
//       return;
//     } else if (!RegExpEmailValidation.test(email.current.value.toLowerCase())) {
//       setState({ email: false, buttonDisabled: true });
//       return;
//     } else if (!checkbox.current.checked) {
//       setState({ checkbox: false, buttonDisabled: true });
//       return;
//     }

//     const userCardsS: CardMenu[] = [
//       {
//         firstName:
//           firstName.current.value.slice(0, 1).toUpperCase() +
//           firstName.current.value.slice(1),
//         lastName:
//           lastName.current.value.slice(0, 1).toUpperCase() +
//           lastName.current.value.slice(1),
//         email: email.current.value,
//         gender: genderFemale.current.checked
//           ? genderFemale.current.value
//           : genderMale.current.value,
//         image: imageUser,
//         location:
//           select.current.value === 'Location' ? 'unknown' : select.current.value,
//       },
//     ];

//     setState({ userCards: [...userCards, ...userCardsS] });
//   }

//   setState({
//     email: true,
//     lastName: true,
//     firstName: true,
//     gender: true,
//     checkbox: true,
//     imageUser: '',
//     buttonDisabled: true,
//   });
//   form.current!.reset();
// };
