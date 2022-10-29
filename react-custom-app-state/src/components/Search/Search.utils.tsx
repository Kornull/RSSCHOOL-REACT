import React, { Reducer, ReducerAction, useReducer } from 'react';

export enum TextActionKind {
  BREAKPOINT_ALL = 'all',
  BREAKPOINT_SPECIES = 'species',
  BREAKPOINT_STATUS = 'status',
}

type TextState = {
  textKey: string;
  searchValue: string;
};

export type TextAction = {
  type?: string;
  valueSearch: string;
};

export const Inicialized: TextState = {
  textKey: 'all',
  searchValue: '',
};

const reducerSearch: Reducer<TextState, TextAction> = (state, action) => {
  console.log(action);
  switch (action.type) {
    case TextActionKind.BREAKPOINT_ALL:
      console.log('1', action.type);
      return {
        textKey: action.type,
        searchValue: action.valueSearch,
      };
    case TextActionKind.BREAKPOINT_STATUS:
      console.log('2', action.type);
      return {
        textKey: action.type,
        searchValue: action.valueSearch,
      };
    case TextActionKind.BREAKPOINT_SPECIES:
      console.log('3', action.type);
      return {
        textKey: action.type,
        searchValue: action.valueSearch,
      };
    default:
      return state;
  }
};
export default reducerSearch;
