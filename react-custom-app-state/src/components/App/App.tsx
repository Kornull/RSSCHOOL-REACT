import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Form from '../Form';
import Layout from '../Layout';
import PersonCard from '../Cards/PersonCard';

import {
  CardInfo,
  ContextCard,
  FormDataType,
  InitialState,
  SearchContext,
  stateDataSearch,
} from '../Hooks';

import './App.scss';

const App = () => {
  const [stateSearch, setStateSearch] = useState<FormDataType>(stateDataSearch);
  const [cards, setCards] = useState<CardInfo>(InitialState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('person') && !cards.personId) {
      navigate('/');
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <SearchContext.Provider value={{ stateSearch, setStateSearch }}>
        <ContextCard.Provider value={{ cards, setCards }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path={`person-${cards.personId}`} element={<PersonCard />} /> :
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="user-form" element={<Form />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ContextCard.Provider>
      </SearchContext.Provider>
    </div>
  );
};

export default React.memo(App);
