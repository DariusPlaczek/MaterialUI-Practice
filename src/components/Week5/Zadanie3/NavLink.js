import React from 'react';
import { Link } from 'react-router-dom'

function NavLink( { linkName, linkTo } ) {
    return (
        <div>
            <Link to={linkTo}>{linkName}</Link>
        </div>
    )
}

export default NavLink
