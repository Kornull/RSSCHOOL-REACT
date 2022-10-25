import React, { useState, useEffect } from 'react';

import Search from '../../components/Search';
import Cards from '../../components/Cards';

import Load from '../../image/loading.gif';
import { AboutCard, UrlApi } from '../../components/types/types';

type Data = {
  results: AboutCard[];
};

const HomePage = (): JSX.Element => {
  const [cards, setCards] = useState<Array<AboutCard>>([]);
  const [isLoading, setLoading] = useState(true);

  const searchName = (name: string): Promise<void> => {
    return fetch(`${UrlApi.LinkApi}?name=${name}`)
      .then((response: Response) => response.json())
      .then((data: Data) => {
        setCards(data.results);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetch(`${UrlApi.LinkApi}`)
      .then((response: Response) => response.json())
      .then((data: Data) => {
        setCards(data.results);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Search searchName={searchName} />
      {isLoading ? (
        <img className="loading-gif" src={Load} alt="loading"></img>
      ) : (
        <Cards cardList={cards} />
      )}
    </>
  );
};

export default HomePage;
