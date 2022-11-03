import React, { useState, useEffect } from 'react';

import Search from '../../components/Search';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';

import { CardInfo, InitialState, useCardContext, useSearchContext } from '../../components/Hooks';

import Load from '../../image/loading.gif';
import { ENDPOINTS } from '../../components/types/types';

const HomePage = () => {
  const { cards, setCards } = useCardContext();
  const { stateSearch } = useSearchContext();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${ENDPOINTS.character}?${stateSearch.type === 'all' ? 'name' : stateSearch.type}=${
        stateSearch.valueSearch
      }&page=${stateSearch.page}`
    )
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        if (data.error?.length) {
          return setCards(InitialState);
        } else {
          setCards({
            ...cards,
            ...data,
          });
        }
      });
    setLoading(false);
  }, [stateSearch.type, stateSearch.valueSearch, stateSearch.page]);

  return (
    <>
      <Search />
      {Array.isArray(cards.results) && <Pagination />}
      {isLoading ? <img className="loading-gif" src={Load} alt="loading"></img> : <Cards />}
    </>
  );
};

export default HomePage;
