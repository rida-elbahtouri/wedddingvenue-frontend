import React from 'react'
import { Link } from 'react-router-dom';
import addTofavourie from '../functions/addTofavourite'
import '../assets/styles/card.css'

export default function VenueCard({venue}) {
    
    return (
        
        
                <div className="card">
                   <img src={venue.photo} alt={venue.name} />
                   <Link to={`/venue/${venue.id}/${venue.name}`}>
                   <div className="content">
                   <p> {venue.name} </p>
                 
                   <p className="price"> {venue.price} $/day </p>
                   
                
                   </div>
                   </Link>
                   <button className="btn" onClick={()=>{addTofavourie(1,venue.id)}}>Add to favourite</button>
                   </div>
         
       
    )
}
