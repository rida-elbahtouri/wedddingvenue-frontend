import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Getvenues from '../actions';
import VenueCard from '../component/venueCard';
import loading from '../assets/giphy.gif';
import getvenuesApi from '../functions/GetvenuesApi';

class VenueList extends Component {
    componentDidMount=async () => {
      getvenuesApi().then(res => {
        const { Getvenues } = this.props;
        Getvenues(res.data);
      });
    }

    renderHelper = () => {
      if (!localStorage.getItem('user_id')) {
        return <Redirect to="/signup" />;
      }

      let result = null;
      const { venues } = this.props;
      if (venues.length > 0) {
        result = venues.map(venue => (<VenueCard key={venue.id} venue={venue} />));
      } else {
        result = (
          <img src={loading} alt="loading" />
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

VenueList.propTypes = {
  // eslint-disable-next-line
  venues: PropTypes.array.isRequired,
  Getvenues: PropTypes.func.isRequired,

};
export default connect(mapStateToProps, mapDispatchToProps)(VenueList);
