import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('render pages', () => {
  it('home page renders', () => {
    window.history.pushState({}, '', '/');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('about page renders', () => {
    window.history.pushState({}, '', '/about');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('404 page renders', () => {
    window.history.pushState({}, '', '/tdfygh');

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
