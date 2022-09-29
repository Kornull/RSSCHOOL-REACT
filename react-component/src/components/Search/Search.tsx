import React, { Component } from 'react';
import styles from './Search.module.scss';

type StateSearch = {
  search: string;
};

class Search extends Component {
  state: StateSearch = {
    search: '',
  };
  handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { search } = this.state;
    return (
      <div className={styles.Search}>
        <form action="">
          <input
            className={styles.SearchInput}
            name="search"
            type="text"
            placeholder="Search"
            value={search}
            autoComplete="off"
            onChange={this.handelChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
