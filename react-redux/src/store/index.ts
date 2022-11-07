import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cardsReducer from './cards-reducer/cardsSlice';
import { MiddlewareArray } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
  // middleware: MiddlewareArray(thunk),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
