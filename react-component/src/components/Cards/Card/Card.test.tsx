import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

export const characterInfo = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      // ...
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
];

describe('render card character', () => {
  const { id, status, name, species, gender, location, type } = characterInfo[0];
  test('', () => {
    render(
      <Card
        id={id}
        name={name}
        species={species}
        location={location}
        status={status}
        gender={gender}
        type={type}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/species/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/dossier/i)).toBeInTheDocument();
    expect(screen.getByText(/location/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  test('location unknown', () => {
    render(
      <Card
        id={id}
        name={name}
        species={species}
        location={undefined}
        status={status}
        gender={gender}
        type={type}
      />
    );
    expect(screen.getByText('unknown')).toBeInTheDocument();
  });
});
