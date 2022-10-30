import React, { useState, useEffect } from 'react';

import Search from '../../components/Search';
import Cards from '../../components/Cards';

import {
  CardInfo,
  InItialState,
  useCardContext,
  useSearchContext,
} from 'components/Hooks/ContextCards';

import Load from '../../image/loading.gif';
import { UrlApi } from '../../components/types/types';

const HomePage = () => {
  const { setCards } = useCardContext();
  const { stateSearch } = useSearchContext();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${UrlApi.LinkApi}?${stateSearch.type}=${stateSearch.valueSearch}`)
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        setCards(data);
        setLoading(false);
      })
      .catch(() => {
        setCards(InItialState);
      });
  }, [setCards, stateSearch]);

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
      <Search />
      {isLoading ? <img className="loading-gif" src={Load} alt="loading"></img> : <Cards />}
    </>
  );
};

export default HomePage;
