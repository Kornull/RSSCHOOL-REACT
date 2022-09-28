import React, { Component } from 'react';
import './App.css';
import Layout from '../layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import NotFoundPage from '../../pages/NotFoundPage';

class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
