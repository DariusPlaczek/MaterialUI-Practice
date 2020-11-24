import React from 'react'

import NavMenu from '../Week5/Zadanie3/NavMenu';

function LeftSideBar() {
    return (
        <div className="leftsidebar">
            <NavMenu styles="link slide-right" isActive="is-active" />
        </div>
    )
}

export default LeftSideBar
