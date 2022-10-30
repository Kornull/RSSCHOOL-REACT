import React, { useState, useEffect } from 'react';

import Search from '../../components/Search';
import Cards from '../../components/Cards';

import { CardInfo, InItialState, useCardContext } from 'components/Hooks/ContextCards';
import Load from '../../image/loading.gif';
import { UrlApi } from '../../components/types/types';

const HomePage = () => {
  const { setCards } = useCardContext();

  const [isLoading, setLoading] = useState(true);

  const searchName = (name: string): Promise<void> => {
    return fetch(`${UrlApi.LinkApi}?name=${name}`)
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        setCards(data);
        setLoading(false);
      })
      .catch(() => {
        setCards(InItialState);
      });
  };

  useEffect(() => {
    fetch(`${UrlApi.LinkApi}`)
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        setCards(data);
        setLoading(false);
      });
  }, [setCards]);

  return (
    <>
      <Search searchName={searchName} />
      {isLoading ? <img className="loading-gif" src={Load} alt="loading"></img> : <Cards />}
    </>
  );
};

export default HomePage;
