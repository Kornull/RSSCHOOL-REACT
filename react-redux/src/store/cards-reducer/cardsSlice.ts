import { PayloadAction } from '@reduxjs/toolkit';
import { AboutCard } from 'components/types/types';
import { createSlice } from '@reduxjs/toolkit';

enum ActionsCards {
  ADD_CARDS = 'ADD_CARDS',
}

export type CardInfo = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: AboutCard[];
  viewPersonCard: boolean;
  personId: string;
  error?: string;
};
type CardState = {
  cards: CardInfo;
};
export const InitialCardsState: CardState = {
  cards: {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
    viewPersonCard: false,
    personId: '',
  },
};

export type AddCards = {
  type: ActionsCards.ADD_CARDS;
  payload: CardInfo;
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: InitialCardsState,
  reducers: {
    addCards(state: CardState, action: PayloadAction<CardInfo>) {
      console.log(action);
      console.log(state);
      state.cards = action.payload;
    },
  },
});

export const { addCards } = cardsSlice.actions;
export default cardsSlice.reducer;
