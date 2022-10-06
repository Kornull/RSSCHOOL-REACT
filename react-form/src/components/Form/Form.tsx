import React, { Component, createRef, FormEvent } from 'react';

import { planets } from '../template/planets';
import styles from './Form.module.scss';

class Form extends Component {
  private firstNameRef = React.createRef<HTMLInputElement>();
  private lastNameRef = React.createRef<HTMLInputElement>();
  private emailRef = React.createRef<HTMLInputElement>();
  private genderMaleRef = React.createRef<HTMLInputElement>();
  private genderFemaleRef = React.createRef<HTMLInputElement>();
  private fileRef = React.createRef<HTMLInputElement>();
  private checkboxRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLSelectElement>();
  state = {
    userCards: [],
  };

  handleSubmit = (event: FormEvent) => {};

  render() {
    return (
      <div className={styles.formBlock}>
        <form className={styles.formBlockUseForm} onSubmit={this.handleSubmit}>
          First name
          <input type="text" name="firstName" ref={this.firstNameRef} />
          Last name
          <input type="text" name="lastName" ref={this.lastNameRef} />
          Email
          <input type="email" name="email" ref={this.emailRef} />
          <label htmlFor="male" className={styles.formBlockLabel}>
            Female
            <input type="radio" name="gender" value="female" ref={this.genderFemaleRef} />
            Male
            <input type="radio" name="gender" value="male" ref={this.genderMaleRef} />
          </label>
          <select name="select" ref={this.selectRef}>
            <option value={this.selectRef.current?.value}>Your planet</option>
            {planets.map((planet: string) => (
              <option key={planet} value={planet}>
                {planet}
              </option>
            ))}
          </select>
          <input type="file" ref={this.fileRef} />
          Add your image
          <input type="checkbox" ref={this.checkboxRef} />I am
          <button>Submit</button>
          <button>Reset</button>
        </form>
      </div>
    );
  }
}

export default Form;
