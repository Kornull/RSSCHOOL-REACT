import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import {
  SearchContext,
  FormDataType,
  CardInfo,
  ContextCard,
  InitialState,
  stateDataSearch,
} from '../Hooks';

const Layout = () => {
  const [stateSearch, setStateSearch] = useState<FormDataType>(stateDataSearch);
  const [cards, setCards] = useState<CardInfo>(InitialState);

  return (
    <>
      <Header />
      <main className="main container" data-testid="main-block">
        <SearchContext.Provider value={{ stateSearch, setStateSearch }}>
          <ContextCard.Provider value={{ cards, setCards }}>
            <Outlet />
          </ContextCard.Provider>
        </SearchContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
