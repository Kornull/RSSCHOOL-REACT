import { createContext, useContext } from 'react';

export type FormDataType = {
  type: string;
  valueSearch: string;
  page: string;
};

export type SearchSettings = {
  stateSearch: FormDataType;
  setStateSearch: (data: FormDataType) => void;
};

export const stateDataSearch: FormDataType = {
  type: 'all',
  valueSearch: ' ',
  page: '1',
};

export const InitialSearch: SearchSettings = {
  stateSearch: stateDataSearch,
  setStateSearch: () => {},
};

export const SearchContext = createContext(InitialSearch);
export const useSearchContext = () => useContext(SearchContext);
