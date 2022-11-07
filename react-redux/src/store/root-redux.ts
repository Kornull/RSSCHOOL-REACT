// import { AboutCard } from '../components/types/types';

// enum dddd {
//   ADD_CARDS = 'ADD_CARDS',
// }

// type AddCards = {
//   type: dddd.ADD_CARDS;
//   payload: AboutCard[];
// };

// type ActionType = AddCards;

// type DefaultStore = {
//   info: {
//     count: number;
//     pages: number;
//     next: string | null;
//     prev: string | null;
//   };
//   results: AboutCard[];
//   viewPersonCard: boolean;
//   personId: string;
//   type: string;
//   valueSearch: string;
//   searchCard: string;
//   loading: boolean;
//   page: string;
//   error?: string;
// };

// const defaultState: DefaultStore = {
//   info: {
//     count: 0,
//     pages: 0,
//     next: null,
//     prev: null,
//   },
//   results: [],
//   viewPersonCard: false,
//   personId: '',
//   type: 'all',
//   valueSearch: '',
//   searchCard: '',
//   loading: true,
//   page: '1',
// };

// export const cardsReducer = (state = defaultState, action: ActionType): DefaultStore => {
//   switch (action.type) {
//     case dddd.ADD_CARDS:
//       return {
//         ...state,
//         results: action.payload,
//       };

//     default:
//       return state;
//   }
// };
