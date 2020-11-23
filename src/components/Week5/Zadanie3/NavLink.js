import React from 'react';
import { Link } from 'react-router-dom'

function NavLink( { linkName, linkTo } ) {
    return (
        <div className="link">
            <Link to={linkTo}>{linkName}</Link>
        </div>
    )
}

export default NavLink
