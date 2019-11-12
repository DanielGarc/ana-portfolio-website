import React from 'react';

import '../css/navbar.css';

const NavBar = () => {
    return (
        <div className="navWrapper">
            <div className ="contentWrapper">
                <div className="navLogo">
                    <h2> ARL </h2>
                </div>

                <div className="navLinks">
                    <a> About </a>
                    <a> Projects </a>
                    <a> Contact </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
