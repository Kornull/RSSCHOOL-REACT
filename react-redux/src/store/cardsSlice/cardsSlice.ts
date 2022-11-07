import { createAsyncThunk, isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import { AboutCard, ENDPOINTS } from 'components/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { ActionsCards } from 'store/types';
import { useAppSelector } from 'store/hooks';

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
  status: null | string;
  loading: boolean;
  error?: string | null;
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
    status: null,
    loading: false,
  },
};

export type AddCards = {
  type: ActionsCards.ADD_CARDS;
  payload: CardState;
};

export const fetchCards = createAsyncThunk<CardInfo, undefined, { rejectValue: string }>(
  'cards/fetchCards',
  async () => {
    const res = await fetch(`${ENDPOINTS.character}`);
    if (!res.ok) return isRejectedWithValue('Ups');

    const data = res.json();

    return data;
  }
);

export const fetchSearchCards = createAsyncThunk<CardInfo, string, { rejectValue: string }>(
  'cards/fetchSearchCards',
  async (searchPageLink: string) => {
    // const search = useAppSelector((state) => state.search.search);

    const res = await fetch(searchPageLink);

    if (!res.ok) {
      return InitialCardsState;
    }

    const data = res.json();

    return data;
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: InitialCardsState,
  reducers: {
    // addCards(state: CardState, action: PayloadAction<CardInfo>) {
    //   state.cards = action.payload;
    // },
    // addPersonId(state: CardState, action: PayloadAction<string>) {
    //   state.cards.personId = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.cards.loading = true;
        state.cards.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.cards.loading = false;
      })
      .addCase(fetchSearchCards.pending, (state) => {
        state.cards.loading = true;
        state.cards.error = null;
      })
      .addCase(fetchSearchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        // state.cards.loading = false;
      });
  },
});

// export const { addCards, addPersonId } = cardsSlice.actions;
export default cardsSlice.reducer;
