import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetDetails } from '../actions';
import { AddTofavourite, GetDetailsApi } from '../functions/Api';

import '../assets/styles/details.css';

class VenueDetails extends Component {
    componentDidMount=() => {
      // eslint-disable-next-line
      GetDetailsApi(this.props.match.params.id).then(res => {
        const { GetDetails } = this.props;
        GetDetails(res.data);
      });
    }

     renderHelper=() => { // eslint-disable-line
       if (!localStorage.getItem('token')) {
         return <Redirect to="/signup" />;
       }
       const { venueDetails } = this.props;
       if (venueDetails) {
         const venue = venueDetails;
         return (
           <div>
             <div className="imgcont">
               <img className="detimage" src={venue.photo} alt={venue.name} />
               <h2 className="detprice">
                 {' '}
                 {venue.price}
                 {' '}
                 $
                 <br />
                 per Day
                 {' '}
               </h2>
             </div>
             <div className="det">
               <h2 className="detname">
                 {' '}
                 {venue.name}
                 {' '}
               </h2>

               <p className="desc">
                 {venue.description}
                 {' '}
               </p>
             </div>
             <button className="btn" type="button" onClick={() => { AddTofavourite(localStorage.getItem('token'), venue.id); }}> {// eslint-disable-line
             }
               Add to favourite
             </button>
           </div>
         );
       }
     }

     render() {
       return (
         <div>
           { this.renderHelper()}
         </div>
       );
     }
}

const mapStateToProps = state => ({
  venueDetails: state.venue_details,
});

const mapDispatchToProps = dispatch => ({
  GetDetails: data => {
    dispatch(GetDetails(data));
  },
});

VenueDetails.defaultProps = {
  venueDetails: PropTypes.shape({
    id: '',
    name: '',
    price: '',
    description: '',
    photo: '',
  }),
};
VenueDetails.propTypes = {
  GetDetails: PropTypes.func.isRequired,
  venueDetails: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    photo: PropTypes.string,
  }),
};
export default connect(mapStateToProps, mapDispatchToProps)(VenueDetails);
