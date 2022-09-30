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
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const setLocalStorage = (id: string, data: string | object): void => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe('data is added into local storage', () => {
  test('test localStorage input text', () => {
    const idLocal = '1';
    const textInput = '0123';
    setLocalStorage(idLocal, textInput);
    expect(localStorage.getItem(idLocal)).toEqual(JSON.stringify(textInput));
    localStorageMock.clear();
    expect(localStorage.getItem(idLocal)).toBe(undefined);
  });
});

describe('create input element', () => {
  test('render input', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  test('test focus input', () => {
    const { getByTestId } = render(<input type="text" data-testid="search-input" />);
    const input = getByTestId('search-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
test('write input', () => {
  render(<Search />);
  userEvent.type(screen.getByRole('textbox'), 'react component');
});
