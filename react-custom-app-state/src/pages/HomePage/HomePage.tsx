import React, { useState, useEffect } from 'react';

import Search from '../../components/Search';
import Cards from '../../components/Cards';

import { CardInfo, InitialState, useCardContext, useSearchContext } from '../../components/Hooks';

import Load from '../../image/loading.gif';
import { UrlApi } from '../../components/types/types';
import Pagination from '../../components/Pagination';

const HomePage = () => {
  const { cards, setCards } = useCardContext();
  const { stateSearch, setStateSearch } = useSearchContext();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${UrlApi.LinkApi}?${stateSearch.type === 'all' ? 'name' : stateSearch.type}=${
        stateSearch.valueSearch
      }&page=${stateSearch.page}`
    )
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        setLoading(false);
        setCards(data);
      })
      .catch(() => {
        setCards(InitialState);
      });
  }, [setStateSearch, setCards, stateSearch.type, stateSearch.valueSearch, stateSearch.page]);

  return (
    <>
      <Search />
      {Array.isArray(cards.results) && <Pagination />}

      {isLoading ? <img className="loading-gif" src={Load} alt="loading"></img> : <Cards />}
    </>
  );
};

export default HomePage;
