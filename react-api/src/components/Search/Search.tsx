import React, { ChangeEvent, Component, FormEvent } from 'react';
import styles from './Search.module.scss';
import IconSVG from '../../image/icon-search.svg';

type StateSearch = {
  readonly search: string;
};

enum LocalStoreKey {
  keyStorage = 'SearchValues',
}

type SearchProps = {
  searchName: (name: string) => void;
};

class Search extends Component<SearchProps, StateSearch> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  handleSearch = (ev: FormEvent) => {
    ev.preventDefault();
    this.props.searchName(this.state.search);
  };

  componentDidMount(): void {
    const value = localStorage.getItem(LocalStoreKey.keyStorage);
    if (value) this.setState({ search: value });
    localStorage.setItem(LocalStoreKey.keyStorage, '');
  }

  componentWillUnmount(): void {
    const { search } = this.state;
    localStorage.setItem(LocalStoreKey.keyStorage, search);
  }

  render(): JSX.Element {
    const { search } = this.state;
    return (
      <div className={styles.search}>
        <form className={styles.searchForm} data-testid="form-search" onSubmit={this.handleSearch}>
          <input
            className={styles.searchInput}
            data-testid="search-cards"
            name="search"
            type="text"
            placeholder="Search..."
            value={search}
            autoComplete="off"
            onChange={this.handelChange}
          />
          <button data-testid="button-search">
            <svg className={styles.searchIcon}>
              <use xlinkHref={`${IconSVG}#icon-search`} />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
