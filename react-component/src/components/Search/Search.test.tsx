import { getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

type LocalMock = {
  [key: string]: string;
};

const localStorageMock = (() => {
  let store: LocalMock = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const setLocalStorage = (id: string, data: string | object): void => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe('data is writing and deleting in to local storage', () => {
  const idLocal = '1';
  const textInput = '0123';

  test('verification of writing and deleting text from localStorage', () => {
    setLocalStorage(idLocal, textInput);
    expect(localStorage.getItem(idLocal)).toEqual(JSON.stringify(textInput));
    localStorageMock.clear();
    expect(localStorage.getItem(idLocal)).toBe(undefined);
  });
  test('text returns to input from localstorage', () => {
    render(<Search />);
    setLocalStorage(idLocal, textInput);
    expect(localStorage.getItem(idLocal)).toEqual(JSON.stringify(textInput));
    userEvent.type(screen.getByRole('textbox'), `${textInput}`);
  });
  test('checking the entry into input', () => {
    render(<Search />);
    userEvent.type(screen.getByRole('textbox'), 'react component');
  });
});

describe('create form element in main page', () => {
  test('app has search form', () => {
    render(<Search />);
    expect(screen.getByTestId('form-search')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  test('displaying the search cards on the main page', () => {
    render(<Search />);
    expect(screen.getByTestId('search-cards')).toBeInTheDocument();
  });
});
