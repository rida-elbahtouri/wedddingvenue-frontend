import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VenueCard from '../component/venueCard';
import {
    BrowserRouter as Router
  } from 'react-router-dom';

  beforeEach(() => {
       const venue={
      id:55,
      name:"venue",
      price:1000,
      photo:"photoUrl",
      description:'desc'
  }
  })
afterEach(cleanup);



it('render price', () => {
    const venue={
        id:55,
        name:"venue",
        price:1000,
        photo:"photoUrl",
        description:'desc'
    }
    const { getByTestId } = render(
      <Router>
      <VenueCard key={venue.id} venue={venue} />
      </Router>
      ,
    );
    expect(getByTestId('55')).toHaveTextContent('1000');
  });

  it('render name', () => {
    const venue={
        id:55,
        name:"venue",
        price:1000,
        photo:"photoUrl",
        description:'desc'
    }
    const { getByTestId } = render(
      <Router>
      <VenueCard key={venue.id} venue={venue} />
      </Router>
      ,
    );
    expect(getByTestId('55')).toHaveTextContent('venue');
  });