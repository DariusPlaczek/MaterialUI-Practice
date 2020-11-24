import React from 'react'

import NavLinks from './NavLinks';

function NavMenu() {
    return (
        <>
        <NavLinks isActive="is-active" linkName="Home" linkTo="/" />
        <NavLinks isActive="is-active" linkName="Week5" linkTo="/week5" />
        <NavLinks isActive="is-active" linkName="Kontakt" linkTo="/contact" />
        </>
    )
}

export default NavMenu
