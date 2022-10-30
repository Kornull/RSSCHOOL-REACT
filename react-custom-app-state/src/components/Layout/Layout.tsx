import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import {
  CardInfo,
  ContextCard,
  formset,
  InItialState,
  SearchContext,
} from 'components/Hooks/ContextCards';

const Layout = () => {
  const [stateSearch, dispatch] = useState<formset>({ type: 'all', valueSearch: '' });
  const [cards, setCards] = useState<CardInfo>(InItialState);
  return (
    <>
      <Header />
      <main className="main container" data-testid="main-block">
        <SearchContext.Provider value={{ stateSearch, dispatch }}>
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
