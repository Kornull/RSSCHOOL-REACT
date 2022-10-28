import { render, screen } from '@testing-library/react';
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

function testSearch(): string {
  return 'm';
}

function errorSearch(): string {
  return 'number1';
}

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
    render(<Search searchName={testSearch} />);
    setLocalStorage(idLocal, textInput);
    expect(localStorage.getItem(idLocal)).toEqual(JSON.stringify(textInput));
    userEvent.type(screen.getByRole('textbox'), `${textInput}`);
  });
});

describe('create form element Search in main page', () => {
  test('app has search form', () => {
    render(<Search searchName={testSearch} />);
    expect(screen.getByTestId('form-search')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  test('displaying the search cards on the main page when entering a request', () => {
    render(<Search searchName={testSearch} />);
    expect(screen.getByTestId('search-cards')).toBeInTheDocument();
  });
});

describe('submit button click check', () => {
  test('any text remains in the input field after the button is clicked', () => {
    render(<Search searchName={errorSearch} />);
    userEvent.click(screen.getByTestId('button-search'));
  });
});
