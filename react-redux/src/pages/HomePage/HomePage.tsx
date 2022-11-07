import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/Cards';
// import Pagination from '../../components/Pagination';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import Load from '../../image/loading.gif';
import { fetchCards, fetchSearchCards } from 'store/cardsSlice/cardsSlice';
// import { Search } from 'react-router-dom';
import Search from 'components/Search';
import { ENDPOINTS } from 'components/types/types';
const HomePage = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  // const se = useSelector(addCards);
  // const { cards, setCards } = useCardContext();
  // const { stateSearch } = useSearchContext();
  const [isLoading, setLoading] = useState(true);
  // ?${stateSearch.type === 'all' ? 'name' : stateSearch.type}=${
  // stateSearch.valueSearch
  // }&page=${stateSearch.page}
  // useEffect(() => {
  //   setLoading(true);
  //   dispatch(fetchCards());
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    const Link = `${ENDPOINTS.character}?${search.type === 'all' ? 'name' : search.type}=${
      search.valueSearch
    }&page=${search.page}`;
    dispatch(fetchSearchCards(Link));
    setLoading(false);
  }, [search.valueSearch]);

  return (
    <>
      <Search />
      {/* {Array.isArray(payload.results) && <Pagination />} */}
      {isLoading ? <img className="loading-gif" src={Load} alt="loading"></img> : <Cards />}
    </>
  );
};

export default HomePage;
