import React, { Component, FormEvent } from 'react';

import { planets } from '../template/planets';
import styles from './Form.module.scss';
import UserCards from '../Cards/UserCards/UserCards';

export type CardMenu = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
};

type StateForm = {
  userCards: CardMenu[];
  buttonDisabled: boolean;
  cardUser: string;
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
  state: StateForm = {
    userCards: [],
    buttonDisabled: true,
    cardUser: '',
  };

  handleReview = () => {
    this.setState({ buttonDisabled: false });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(this.file.current?.files);
    if (this.file.current?.files) {
      this.setState({ cardUser: URL.createObjectURL(this.file.current.files[0]) });
    }
    // if (this.email.current && this.lastName.current && this.firstName.current) {
    //   const isValidEmail =
    //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    //       this.email.current.value.toLowerCase()
    //     );
    //
    //   if (this.lastName.current.value.length < 3) {
    //     this.setState({ buttonDisabled: true });
    //     alert('first');
    //     return;
    //   }
    //   if (this.firstName.current.value.length < 3) {
    //     this.setState({ buttonDisabled: true });
    //     alert('last');
    //     return;
    //   }
    //   if (!isValidEmail) {
    //     this.setState({ buttonDisabled: true });
    //     alert('rrrr');
    //     return;
    //   }
    // }
  };

  render() {
    return (
      <div className={styles.formBlock}>
        <form
          className={styles.formBlockUseForm}
          onSubmit={this.handleSubmit}
          onChange={this.handleReview}
          noValidate
        >
          First name
          <input type="text" name="firstName" ref={this.firstName} required />
          Last name
          <input type="text" name="lastName" ref={this.lastName} required />
          Email
          <input type="email" name="email" ref={this.email} required />
          <label htmlFor="male" className={styles.formBlockLabel}>
            Female
            <input type="radio" name="gender" value="female" ref={this.genderFemale} required />
            Male
            <input type="radio" name="gender" value="male" ref={this.genderMale} required />
          </label>
          <select className={styles.formBlockSelect} name="select" ref={this.select}>
            <option value={this.select.current?.value}>Your planet</option>
            {planets.map((planet: string) => (
              <option key={planet} value={planet}>
                {planet}
              </option>
            ))}
          </select>
          <input type="file" accept="image/*" ref={this.file} />
          Add your image
          <input type="checkbox" ref={this.checkbox} />I am
          <button disabled={this.state.buttonDisabled}>Submit</button>
          <button>Reset</button>
        </form>
        <UserCards images={this.state.cardUser} />
      </div>
    );
  }
}

export default Form;
