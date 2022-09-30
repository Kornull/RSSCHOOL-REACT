import React, { Component } from 'react';
import styles from './Search.module.scss';
import IconSVG from '../../image/icon-search.svg';

type StateSearch = {
  readonly search: string;
};

enum LocalStoreKey {
  keyStorage = 'SearchValues',
}

class Search extends Component<Record<string, never>, StateSearch> {
  state: StateSearch = {
    search: '',
  };

  handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  componentDidMount(): void {
    const value = localStorage.getItem(LocalStoreKey.keyStorage);
    if (value) this.setState({ search: value });
  }

  componentWillUnmount(): void {
    const { search } = this.state;
    localStorage.setItem(LocalStoreKey.keyStorage, search);
  }

  render(): JSX.Element {
    const { search } = this.state;
    return (
      <div className={styles.Search}>
        <form className={styles.SearchForm}>
          <input
            className={styles.SearchInput}
            name="search"
            type="text"
            placeholder="Search..."
            value={search}
            autoComplete="off"
            onChange={this.handelChange}
            autoFocus
          />
          <svg className={styles.SearchIcon}>
            <use xlinkHref={`${IconSVG}#icon-search`} />
          </svg>
        </form>
      </div>
    );
  }
}

export default Search;
