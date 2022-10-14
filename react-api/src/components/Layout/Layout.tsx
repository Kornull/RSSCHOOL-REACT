import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

class Layout extends Component {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <main className="main container" data-testid="main-block">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
