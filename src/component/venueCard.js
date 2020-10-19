import React from 'react'
import { Link } from 'react-router-dom';
import addTofavourie from '../functions/addTofavourite'
export default function VenueCard({venue}) {
    
    return (
        <div>
            <Link to={`/venue/${venue.id}/${venue.name}`}>
                   <img src={venue.photo} alt={venue.name} />
                   <h2> {venue.name} </h2>
                   <h2> {venue.price} </h2>
                   <button onClick={()=>{addTofavourie(1,venue.id)}}>Add to favourite</button>
            </Link>
        </div>
    )
}
