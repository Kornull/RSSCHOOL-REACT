import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import { CardInfo, ContextCard } from 'components/Hooks/ContextCards';

const Layout = () => {
  const [cards, setCards] = useState<CardInfo>({
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  });
  return (
    <>
      <Header />
      <main className="main container" data-testid="main-block">
        <ContextCard.Provider value={{ cards, setCards }}>
          <Outlet />
        </ContextCard.Provider>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
