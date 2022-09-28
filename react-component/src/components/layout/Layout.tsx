import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container" style={styleMain}>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

const styleMain = {
  minHeight: 'calc(100vh - 130px)',
};
export default Layout;
