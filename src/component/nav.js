import React from 'react'
import { Link } from 'react-router-dom';
 const Nav=()=> {
    return (
        <div>
            <ul>
                <li>
                <Link to={'/'}>
                    Home
                    </Link>
                    </li>
                <li>LOg in</li>
            </ul>
        </div>
    )
}
export default Nav