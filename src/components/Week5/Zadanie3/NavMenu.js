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



// 3. Menu nawigacyjne
// Napisz komponent NavMenu, który będzie pojawiał się po lewej stronie aplikacji. Komponent będzie zawierał linki nawigacyjne, domyślnie będzie ukryty.

// W aplikacji osadź przycisk, który będzie pozwalał na otworzenie menu (pierwszy klik) oraz zamknięcie menu (kliknięcie po raz drugi).

// Podobny przycisk osadź w komponencie NavMenu. Po jego kliknięciu menu będzie się ukrywało.

// Modyfikacja
// Za pomocą React Router DOM dodaj kilka podstron: np. /home, /about, /contact. W komponencie Nav