import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import NavLinks from '../Week5/Zadanie3/NavLinks';

function ToogleBar() {
    const [open, setOpen] = useState(-251);

    const styles = {
      marginRight: open
    }

    const handleClickOpen = () => {
        open === 0 ? setOpen(-251) : setOpen(0);
    }

    return (
      <div className="toogle-bar-container">
        <div className="toogle-bar-menu" onClick={handleClickOpen}>
            <div className="toogle-bar"></div>
            <div className="toogle-bar"></div>
            <div className="toogle-bar"></div>
        </div>
        <div className="toogle-container" style={styles}>
          <NavLinks linkStyle="toogle-link" isActive="is-activeToogle" linkName="Home" linkTo="/" />
          <NavLinks linkStyle="toogle-link" isActive="is-activeToogle" linkName="Week5" linkTo="/week5" />
          <NavLinks linkStyle="toogle-link" isActive="is-activeToogle" linkName="Kontakt" linkTo="/contact" />
        </div>
      </div>
    )
}

export default ToogleBar
