import React, { Component } from 'react';
import Search from '../../components/Search';
import Cards from '../../components/Cards/Cards';

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

type State = {
  cards: AboutCard[];
};

class HomePage extends Component {
  state: State = {
    cards: [],
  };

  componentDidMount() {
    fetch(
      'https://rickandmortyapi.com/api/character/1,589,99,7,313,4,666,13,23,34,65,43,2,67,89,30'
    )
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data }));
  }

  render() {
    return (
      <>
        <Search />
        <Cards cardList={this.state.cards} />
      </>
    );
  }
}

export default HomePage;
