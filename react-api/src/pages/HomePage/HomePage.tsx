import React, { Component } from 'react';

import Search from '../../components/Search';
import Cards from '../../components/Cards';

import Load from '../../image/loading.gif';
import { StatePerson, AboutCard, UrlApi } from '../../components/types/types';

type Data = {
  results: AboutCard[];
};

class HomePage extends Component {
  state: StatePerson = {
    cards: [],
    loading: true,
    infoPerson: [],
    modalCondition: false,
  };

  componentDidMount(): Promise<void> {
    return fetch(`${UrlApi.LinkApi}`)
      .then((response: Response) => response.json())
      .then((data: Data) => this.setState({ cards: data.results, loading: false }));
  }

  searchName = (name: string): Promise<void> => {
    return fetch(`${UrlApi.LinkApi}?name=${name}`)
      .then((response: Response) => response.json())
      .then((data: Data) => this.setState({ cards: data.results, loading: false }));
  };

  render(): JSX.Element {
    const { cards, loading } = this.state;
    return (
      <>
        <Search searchName={this.searchName} />
        {loading ? (
          <img className="loading-gif" src={Load} alt="loading"></img>
        ) : (
          <Cards cardList={cards} />
        )}
      </>
    );
  }
}

export default HomePage;
