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
  const { stateSearch, dispatch } = useSearchContext();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${UrlApi.LinkApi}?${stateSearch.type === 'all' ? 'name' : stateSearch.type}=${
        stateSearch.valueSearch
      }`
    )
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        setCards(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(() => {
        setCards(InItialState);
      });
  }, [dispatch, setCards, stateSearch.type, stateSearch.valueSearch]);

  return (
    <>
      <Search />
      {isLoading ? <img className="loading-gif" src={Load} alt="loading"></img> : <Cards />}
    </>
  );
};

export default HomePage;
