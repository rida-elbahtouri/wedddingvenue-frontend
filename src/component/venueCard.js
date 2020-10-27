import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AddTofavourite } from '../functions/Api';
import '../assets/styles/card.css';

const VenueCard = ({ venue, addedToFav }) => {
  const addvavbutton = () => {// eslint-disable-line
    if (!addedToFav) {
      return (
        <button
          className="btn"
          type="button"
          onClick={() => {
            AddTofavourite(
              localStorage.getItem('token'),
              venue.id,
            );
          }}
        >
          Add to favourite
        </button>
      );
    }
  };
  return (

    <div data-testid={venue.id} className="card">
      <img src={venue.photo} alt={venue.name} />
      <Link to={`/venue/${venue.id}/${venue.name}`}>
        <div className="content">
          <p>
            {' '}
            {venue.name}
            {' '}
          </p>

          <p className="price">
            {' '}
            {venue.price}
            {' '}
            $/day
            {' '}
          </p>

        </div>
      </Link>
      {addvavbutton()}
    </div>

  );
};

VenueCard.defaultProps = {
  addedToFav: false,
};
VenueCard.propTypes = {
  addedToFav: PropTypes.bool,
  venue: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
export default VenueCard;
