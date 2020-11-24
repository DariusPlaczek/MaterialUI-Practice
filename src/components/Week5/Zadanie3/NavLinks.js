import React from 'react';
import { Link, NavLink } from 'react-router-dom'



function NavLinks( { linkName, linkTo, isActive, linkStyle } ) {

    return (
        <NavLink exact className={linkStyle} activeClassName={isActive} to={linkTo}>
            {linkName}
        </NavLink>
    )
}

export default NavLinks
