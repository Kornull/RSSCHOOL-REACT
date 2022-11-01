import { Reducer } from 'react';
import { FormDataType } from '../Hooks';

export enum TextActionKind {
  BREAKPOINT_ALL = 'all',
  BREAKPOINT_SPECIES = 'species',
  BREAKPOINT_STATUS = 'status',
}

type TextState = {
  searchCard: string;
  page: string;
  valueSearch: string;
  type?: string;
  textKey?: string;
};

// export type  = {
//   valueSearch?: string;
//   searchCard: string;
//   page: string;
//   type?: string;
//   searchValue: string;
//   textKey: string;
// };

type TextAction = {
  type: string;
  valueSearch: string;
  searchCard: string;
  page: string;
};

const ReducerSearch: Reducer<FormDataType, TextAction> = (state, action) => {
  console.log(action);

  switch (action.type) {
    case TextActionKind.BREAKPOINT_ALL:
      return {
        ...action,
        type: action.type,
        searchValue: action.valueSearch,
        searchCard: action.searchCard,
      };
    case TextActionKind.BREAKPOINT_STATUS:
      return {
        ...action,
        type: action.type,
        searchValue: action.valueSearch,
        searchCard: action.searchCard,
      };
    case TextActionKind.BREAKPOINT_SPECIES:
      return {
        ...action,
        type: action.type,
        searchValue: action.valueSearch,
        searchCard: action.searchCard,
      };
    default:
      return state;
  }
};
export default ReducerSearch;
