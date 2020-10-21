import React from 'react'
import { Link } from 'react-router-dom';
import addTofavourie from '../functions/addTofavourite'
import '../assets/styles/card.css'
import PropTypes from 'prop-types'

export default function VenueCard({venue,addedToFav}) {
   
    const addvavbutton=()=>{
       if(!addedToFav){
           return   <button className="btn" onClick={()=>{addTofavourie(
            parseInt(localStorage.getItem('user_id'))
            ,venue.id)}}>Add to favourite</button>
       }
         
    }
    return (
        
        
                <div className="card">
                   <img src={venue.photo} alt={venue.name} />
                   <Link to={`/venue/${venue.id}/${venue.name}`}>
                   <div className="content">
                   <p> {venue.name} </p>
                 
                   <p className="price"> {venue.price} $/day </p>
                   
                
                   </div>
                   </Link>
                  {addvavbutton()}
                   </div>
         
       
    )
}

VenueCard.defaultProps = {
    addedToFav:false
  };
VenueCard.propTypes = {
    addedToFav: PropTypes.bool,
    venue: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description:PropTypes.string.isRequired,
        photo:PropTypes.string.isRequired,
      }).isRequired,
  };
