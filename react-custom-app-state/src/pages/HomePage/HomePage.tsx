import React, { useState, useEffect, useContext } from 'react';

import Search from '../../components/Search';
import Cards from '../../components/Cards';

import { CardInfo, ContextCard } from 'components/Hooks/ContextCards';
import Load from '../../image/loading.gif';
import { UrlApi } from '../../components/types/types';

const HomePage = () => {
  const [cards, setCards] = useState<CardInfo>({
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  });
  const [isLoading, setLoading] = useState(true);

  const searchName = (name: string): Promise<void> => {
    return fetch(`${UrlApi.LinkApi}?name=${name}`)
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        setCards(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`${UrlApi.LinkApi}`)
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        setCards(data);
        setLoading(false);
      });
  }, [cards]);

  return (
    <>
      <Search searchName={searchName} />
      <ContextCard.Provider value={{ cards, setCards }}>
        {isLoading ? (
          <img className="loading-gif" src={Load} alt="loading"></img>
        ) : (
          <Cards cardList={cards.results} />
        )}
      </ContextCard.Provider>
    </>
  );
};

export default HomePage;
