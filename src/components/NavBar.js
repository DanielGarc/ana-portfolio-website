import React from 'react';

import '../css/navbar.css';

const NavBar = () => {
    return (
        <div className="navWrapper">
            <div className="navLogo">
                <h2> ARL </h2>
            </div>

            <div className="navLinks">
                <li> About </li>
                <li> Projects </li>
                <li> Contact </li>
            </div>
        </div>
    )
}

export default NavBar;
