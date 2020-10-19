import React from 'react'
import { Redirect } from "react-router-dom";

const VenueDetails=()=> {
    if (!localStorage.getItem('user_id')){
        return <Redirect to='/signup' />
     }
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
export default VenueDetails