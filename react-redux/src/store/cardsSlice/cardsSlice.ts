import { createAsyncThunk, isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import { AboutCard, ENDPOINTS } from 'components/types/types';
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

let newData: CardInfo;

export const fetchSearchCards = createAsyncThunk<CardInfo, string, { rejectValue: string }>(
  'cards/fetchSearchCards',
  async (searchPageLink: string) => {
    await fetch(searchPageLink)
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        if (data.error?.length) {
          newData = InitialCardsState.cards;
          isRejectedWithValue('errr');
        } else {
          newData = data;
        }
      });

    return newData;
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: InitialCardsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.cards.loading = true;
        state.cards.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchSearchCards.pending, (state) => {
        state.cards.loading = true;
        state.cards.error = null;
      })
      .addCase(fetchSearchCards.fulfilled, (state, action) => {
        state.cards.loading = false;
        state.cards = action.payload;
      });
  },
});

export default cardsSlice.reducer;
