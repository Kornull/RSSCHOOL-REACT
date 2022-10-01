import React, { Component } from 'react';
import Search from '../../components/Search';
import Cards from '../../components/Cards';
import Load from '../../image/loading.gif';

export enum UrlApi {
  LinkApi = 'https://rickandmortyapi.com/api/character/',
}

export type AboutCard = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
};

type Data = {
  info: object;
  results: AboutCard[];
};

type State = {
  cards: AboutCard[];
  loading?: boolean;
};

class HomePage extends Component {
  state: State = {
    cards: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`${UrlApi.LinkApi}`)
      .then((response: Response) => response.json())
      .then((data: Data) => this.setState({ cards: data.results, loading: false }));
  }

  render() {
    const { cards, loading } = this.state;
    return (
      <>
        <Search />
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
