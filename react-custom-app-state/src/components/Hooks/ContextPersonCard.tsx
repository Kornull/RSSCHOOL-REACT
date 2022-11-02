import { AboutCard } from 'components/types/types';
import { createContext, useContext } from 'react';

export type PersonInfo = {
  results: AboutCard[];
  viewCard: boolean;
};

export const InitialPersonState: PersonInfo = {
  results: [],
  viewCard: false,
};

export type PersonCardsSettings = {
  personCards: PersonInfo;
  setPersonCards: (data: PersonInfo) => void;
};

export const InitialPerson: PersonCardsSettings = {
  personCards: {
    results: [],
    viewCard: false,
  },
  setPersonCards: () => {},
};

export const ContextPersonCard = createContext(InitialPerson);
export const usePersonCardContext = () => useContext(ContextPersonCard);
