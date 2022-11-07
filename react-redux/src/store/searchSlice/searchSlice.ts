import { PayloadAction } from '@reduxjs/toolkit';
// import { AboutCard } from 'components/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { ActionsCards } from 'store/types';

export type SearchDataType = {
  type: string;
  valueSearch: string;
  searchCard: string;
  page: string;
};

type SearchState = {
  search: SearchDataType;
};

export const InitialSearchState: SearchState = {
  search: {
    type: 'all',
    valueSearch: '',
    searchCard: '',
    page: '1',
  },
};

//

export type PagesStateType = {
  type: ActionsCards.SET_PAGES;
  payload: SearchState;

  // payload: CardInfo;
};

export const searchSlice = createSlice({
  name: 'cards',
  initialState: InitialSearchState,
  reducers: {
    searchRun(state: SearchState, action: PayloadAction<SearchDataType>) {
      // console.log(action);
      // console.log(state);
      state.search = action.payload;
    },
  },
});

export const { searchRun } = searchSlice.actions;
export default searchSlice.reducer;
