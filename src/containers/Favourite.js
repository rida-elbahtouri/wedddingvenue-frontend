import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Getvenues from '../actions';
import VenueCard from '../component/venueCard';
import { GetfavouritesApi } from '../functions/Api';

class Favourite extends Component {
    componentDidMount=() => {
      GetfavouritesApi(localStorage.getItem('token')).then(res => {
        const uniq = [...new Set(res.data.map(x => x.id))].map(
          id => res.data.find(s => s.id === id),
        );
        const { Getvenues } = this.props;
        Getvenues(uniq);
      });
    }

    renderHelper = () => {
      if (!localStorage.getItem('token')) {
        return <Redirect to="/signup" />;
      }
      let result = null;
      const { venues } = this.props;
      if (venues.length > 0) {
        result = venues.map(
          venue => (<VenueCard key={venue.id} addedToFav venue={venue} />),
        );
      }

      return result;
    }

    render() {
      return (
        <div className="cardsList">
          {this.renderHelper()}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  venues: state.venues,
});

const mapDispatchToProps = dispatch => ({
  Getvenues: data => {
    dispatch(Getvenues(data));
  },
});

Favourite.propTypes = {
  Getvenues: PropTypes.func.isRequired,
  // eslint-disable-next-line
    venues: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
