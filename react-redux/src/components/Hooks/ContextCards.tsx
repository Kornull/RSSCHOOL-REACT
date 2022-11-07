// import { AboutCard } from 'components/types/types';
// import { createContext, useContext } from 'react';

// export type CardInfo = {
//   info: {
//     count: number;
//     pages: number;
//     next: string | null;
//     prev: string | null;
//   };
//   results: AboutCard[];
//   viewPersonCard: boolean;
//   personId: string;
//   error?: string;
// };

// export const InitialState: CardInfo = {
//   info: {
//     count: 0,
//     pages: 0,
//     next: null,
//     prev: null,
//   },
//   results: [],
//   viewPersonCard: false,
//   personId: '',
// };

// export type CardsSettings = {
//   cards: CardInfo;
//   setCards: (data: CardInfo) => void;
// };

// export const InitialCards: CardsSettings = {
//   cards: {
//     info: {
//       count: 0,
//       pages: 0,
//       next: null,
//       prev: null,
//     },
//     results: [],
//     viewPersonCard: false,
//     personId: '',
//   },
//   setCards: () => {},
// };

// export const ContextCard = createContext(InitialCards);
// export const useCardContext = () => useContext(ContextCard);
