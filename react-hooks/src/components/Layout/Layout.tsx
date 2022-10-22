import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main container" data-testid="main-block">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
