import { Reducer } from 'react';
import { FormDataType } from '../Hooks';

export type PageAction = {
  typeClick?: string;
  type: string;
  page: string;
  valueSearch: string;
  searchCard: string;
};

enum PageRun {
  prev = 'prev',
  next = 'next',
}

export const ReducerButton: Reducer<FormDataType, PageAction> = (state, action) => {
  switch (action.typeClick) {
    case PageRun.next:
      return {
        ...action,
        page: `${+action.page + 1}`,
      };
    case PageRun.prev:
      return {
        ...action,
        page: `${+action.page - 1}`,
      };
    default:
      return state;
  }
};
