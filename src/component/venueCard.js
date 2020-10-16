import React from 'react'
import { Link } from 'react-router-dom';

export default function VenueCard() {
    return (
        <div>
            <h1>
            <Link to={'/venue/1/venue'}>
                Venue
                </Link>
                </h1>
        </div>
    )
}
