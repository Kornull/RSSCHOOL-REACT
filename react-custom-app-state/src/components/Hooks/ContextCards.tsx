import { AboutCard } from 'components/types/types';
import { createContext, useContext } from 'react';

export type CardInfo = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: AboutCard[];
};

export const InItialState: CardInfo = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
};

export type CardsSettings = {
  cards: CardInfo;
  setCards: (data: CardInfo) => void;
};

export type formset = {
  type: string;
  valueSearch: string;
};

export type SearchSettings = {
  stateSearch: formset;
  dispatch: (data: formset) => void;
};

export const InitialSearch: SearchSettings = {
  stateSearch: {
    type: 'all',
    valueSearch: '',
  },
  dispatch: () => {},
};
export const InitialCards: CardsSettings = {
  cards: {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  },
  setCards: () => {},
};

export const SearchContext = createContext(InitialSearch);

export const ContextCard = createContext(InitialCards);
export const useCardContext = () => useContext(ContextCard);

export const useSearchContext = () => useContext(SearchContext);
