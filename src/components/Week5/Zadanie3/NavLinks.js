import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function NavLinks( { linkName, linkTo, isActive } ) {

    return (
        <NavLink exact className="link slide-right" activeClassName={isActive} to={linkTo}>
            {linkName}
        </NavLink>
    )
}

export default NavLinks
