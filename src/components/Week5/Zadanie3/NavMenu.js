import React from 'react'

import NavLinks from './NavLinks';

function NavMenu({ styles, isActive }) {
    return (
        <>
        <NavLinks linkStyle={styles} isActive={isActive} linkName="Home" linkTo="/" />
        <NavLinks linkStyle={styles} isActive={isActive} linkName="Week5" linkTo="/week5" />
        <NavLinks linkStyle={styles} isActive={isActive} linkName="Kontakt" linkTo="/contact" />
        </>
    )
}

export default NavMenu
