import React, { useState } from 'react'

import NavMenu from '../Week5/Zadanie3/NavMenu'

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
          <NavMenu styles="toogle-link" isActive="is-activeToogle" />
        </div>
      </div>
    )
}

export default ToogleBar
