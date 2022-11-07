import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/Cards';
// import Pagination from '../../components/Pagination';

import { useAppDispatch } from 'store/hooks';
import Load from '../../image/loading.gif';
import { ENDPOINTS } from '../../components/types/types';
import { addPersonId, addCards, CardInfo } from 'store/cardsSlice/cardsSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  // const se = useSelector(addCards);
  // const { cards, setCards } = useCardContext();
  // const { stateSearch } = useSearchContext();
  const [isLoading, setLoading] = useState(true);
  // ?${stateSearch.type === 'all' ? 'name' : stateSearch.type}=${
  // stateSearch.valueSearch
  // }&page=${stateSearch.page}
  useEffect(() => {
    setLoading(true);
    fetch(`${ENDPOINTS.character}`)
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        dispatch(addCards(data));
        dispatch(addPersonId('er'));
        // if (data.error?.length) {
        //   return dispatch(addCards({
        //     ...
        //   }));
        // } else {
        //   setCards({
        //     ...cards,
        //     ...data,
        //   });
        // }
      });
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      {/* <Search /> */}
      {/* {Array.isArray(payload.results) && <Pagination />} */}
      {isLoading ? <img className="loading-gif" src={Load} alt="loading"></img> : <Cards />}
    </>
  );
};

export default HomePage;
