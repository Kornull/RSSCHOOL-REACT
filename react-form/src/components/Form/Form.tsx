import React, { ChangeEvent, Component, FormEvent } from 'react';

import { isValidEmail, planetsArray, imageIsValid } from '../template/constants';
import styles from './Form.module.scss';
import UserCards from '../Cards/UserCards';

export type CardMenu = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
  location: string;
};

export type StateForm = {
  userCards: CardMenu[];
  buttonDisabled: boolean;
  imageUser: string;
  email: boolean;
  lastName: boolean;
  firstName: boolean;
  gender: boolean;
  checkbox: boolean;
  image: boolean;
};

class Form extends Component {
  private firstName = React.createRef<HTMLInputElement>();
  private lastName = React.createRef<HTMLInputElement>();
  private email = React.createRef<HTMLInputElement>();
  private genderMale = React.createRef<HTMLInputElement>();
  private genderFemale = React.createRef<HTMLInputElement>();
  private file = React.createRef<HTMLInputElement>();
  private checkbox = React.createRef<HTMLInputElement>();
  private select = React.createRef<HTMLSelectElement>();
  private form = React.createRef<HTMLFormElement>();

  state: StateForm = {
    userCards: [],
    buttonDisabled: true,
    imageUser: '',
    email: true,
    lastName: true,
    firstName: true,
    gender: true,
    checkbox: true,
    image: false,
  };

  isDisabledValidation = (ev: ChangeEvent | FormEvent): void => {
    this.setState({ buttonDisabled: false });
    const element = ev.target as HTMLInputElement;
    if (element.value.length >= 1) {
      this.setState({ [element.name]: true });
    }
    if (element.checked) {
      this.setState({ [element.name]: true });
    }
  };

  isUploadFile = () => {
    if (this.file.current?.files && this.file.current?.files[0]) {
      const userImage = this.file.current?.files[0].name;
      if (userImage !== undefined && imageIsValid.test(userImage)) {
        this.setState({ imageUser: URL.createObjectURL(this.file.current.files[0]) });
        this.setState({ image: true, buttonDisabled: false });
      }
    }
  };

  handleSubmit = (ev: FormEvent): void => {
    ev.preventDefault();
    if (
      this.email.current &&
      this.lastName.current &&
      this.firstName.current &&
      this.genderFemale.current &&
      this.genderMale.current &&
      this.checkbox.current &&
      this.select.current
    ) {
      if (this.firstName.current.value.length < 3) {
        this.setState({ firstName: false, buttonDisabled: true });
        return;
      } else if (this.lastName.current.value.length < 3) {
        this.setState({ lastName: false, buttonDisabled: true });
        return;
      } else if (!isValidEmail.test(this.email.current.value.toLowerCase())) {
        this.setState({ email: false, buttonDisabled: true });
        return;
      } else if (!this.checkbox.current.checked) {
        this.setState({ checkbox: false, buttonDisabled: true });
        return;
      }

      const userCardsS: CardMenu[] = [
        {
          firstName:
            this.firstName.current.value.slice(0, 1).toUpperCase() +
            this.firstName.current.value.slice(1),
          lastName:
            this.lastName.current.value.slice(0, 1).toUpperCase() +
            this.lastName.current.value.slice(1),
          email: this.email.current.value,
          gender: this.genderFemale.current.checked
            ? this.genderFemale.current.value
            : this.genderMale.current.value,
          image: this.state.imageUser,
          location:
            this.select.current.value === 'Location' ? 'unknown' : this.select.current.value,
        },
      ];

      this.setState({ userCards: [...this.state.userCards, ...userCardsS] });
    }

    this.setState({
      email: true,
      lastName: true,
      firstName: true,
      gender: true,
      checkbox: true,
      imageUser: '',
      buttonDisabled: true,
    });
    this.form.current!.reset();
  };

  render(): JSX.Element {
    return (
      <>
        <div className={styles.formBlock}>
          <form
            className={styles.formBlockUseForm}
            onSubmit={this.handleSubmit}
            ref={this.form}
            autoComplete="off"
            noValidate
            data-testid="form-user"
          >
            <label className={styles.labelContainer}>
              First name
              <input
                className={styles.formBlockInput}
                type="text"
                name="firstName"
                autoComplete="disabled"
                onChange={this.isDisabledValidation}
                ref={this.firstName}
                data-testid="first-name"
              />
              {this.state.firstName ? null : (
                <span className={styles.formBlockErrorText} data-testid="error-text">
                  Enter your first name
                </span>
              )}
            </label>

            <label className={styles.labelContainer}>
              Last name
              <input
                className={styles.formBlockInput}
                type="text"
                name="lastName"
                autoComplete="disabled"
                onChange={this.isDisabledValidation}
                ref={this.lastName}
                data-testid="last-name"
              />
              {this.state.lastName ? null : (
                <span className={styles.formBlockErrorText} data-testid="error-text">
                  Enter your last name
                </span>
              )}
            </label>

            <label className={styles.labelContainer}>
              Email
              <input
                className={styles.formBlockInput}
                type="email"
                name="email"
                autoComplete="disabled"
                onChange={this.isDisabledValidation}
                ref={this.email}
                data-testid="email"
              />
              {this.state.email ? null : (
                <span className={styles.formBlockErrorText} data-testid="error-text">
                  Enter valid email
                </span>
              )}
            </label>

            <label
              htmlFor="male"
              className={styles.formBlockLabel}
              onChange={this.isDisabledValidation}
            >
              Female
              <input
                className={styles.formBlockInput}
                type="radio"
                name="gender"
                value="female"
                defaultChecked
                ref={this.genderFemale}
                data-testid="gender-female"
              />
              Male
              <input
                className={styles.formBlockInput}
                type="radio"
                name="gender"
                value="male"
                ref={this.genderMale}
                data-testid="gender-male"
              />
            </label>

            <select className={styles.formBlockSelect} name="select" ref={this.select}>
              <option value={this.select.current?.value}>Location</option>
              {planetsArray.map((planet: string) => (
                <option key={planet} value={planet}>
                  {planet}
                </option>
              ))}
            </select>

            <div className={styles.blockImageCard}>
              <label className={styles.formBlockLabelFileButton} htmlFor="input__file">
                Choice image
                <input
                  className={styles.formBlockFile}
                  id="input__file"
                  type="file"
                  ref={this.file}
                  onChange={this.isUploadFile}
                  data-testid="input-image"
                />
              </label>
              {this.state.imageUser ? (
                <div className={styles.imageBlock}>
                  <img
                    className={styles.imagePrev}
                    src={this.state.imageUser}
                    alt=""
                    data-testid="image-block"
                  />
                </div>
              ) : (
                <div className={styles.imageBlock}></div>
              )}
            </div>

            <label className={styles.formBlockCheckbox}>
              I agree with the conditions
              <input
                type="checkbox"
                name="checkbox"
                autoComplete="disabled"
                ref={this.checkbox}
                onChange={this.isDisabledValidation}
                data-testid="checkbox-button"
              />
              {this.state.checkbox ? null : (
                <span className={styles.formBlockErrorText} data-testid="error-text">
                  You must agree to the terms
                </span>
              )}
            </label>

            <button
              type="submit"
              className={styles.formBlockButtonSubmit}
              disabled={this.state.buttonDisabled}
              data-testid="button-submit"
            >
              Submit
            </button>
          </form>
        </div>
        {this.state.userCards.length ? <UserCards cards={this.state.userCards} /> : null}
      </>
    );
  }
}

export default Form;
