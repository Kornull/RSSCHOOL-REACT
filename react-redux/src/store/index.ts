import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cardsReducer from './cardsSlice/cardsSlice';
import { MiddlewareArray } from '@reduxjs/toolkit';
import pagesReducer from './searchSlice/searchSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    search: pagesReducer,
  },
  // middleware: MiddlewareArray(thunk),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
