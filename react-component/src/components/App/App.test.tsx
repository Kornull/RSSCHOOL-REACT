import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('home page renders', () => {
  window.history.pushState({}, '', '/');
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByRole('main')).toBeInTheDocument();
});
test('about page renders', () => {
  window.history.pushState({}, '', '/about');
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByRole('main')).toBeInTheDocument();
});
test('404 page renders', () => {
  window.history.pushState({}, '', '/tdfygh');

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByRole('main')).toBeInTheDocument();
});
