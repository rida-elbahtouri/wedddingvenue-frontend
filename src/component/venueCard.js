import React from 'react'
import { Link } from 'react-router-dom';

export default function VenueCard({venue}) {
    
    return (
        <div>
            <Link to={`/venue/${venue.id}/${venue.name}`}>
                   <img src={venue.photo} alt={venue.name} />
                   <h2> {venue.name} </h2>
                   <h2> {venue.price} </h2>
            </Link>
        </div>
    )
}
