import { PayloadAction } from '@reduxjs/toolkit';
import { AboutCard } from 'components/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { ActionsCards } from 'store/types';

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
  payload: CardState;
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: InitialCardsState,
  reducers: {
    addCards(state: CardState, action: PayloadAction<CardInfo>) {
      state.cards = action.payload;
    },
    addPersonId(state: CardState, action: PayloadAction<string>) {
      state.cards.personId = action.payload;
    },
  },
});

export const { addCards, addPersonId } = cardsSlice.actions;
export default cardsSlice.reducer;
