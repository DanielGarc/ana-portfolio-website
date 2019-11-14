import React from 'react';
import { NavLink, Link } from 'react-router-dom';



import '../css/navbar.css';

const NavBar = () => {
    return (
        <div className="navWrapper">
            <div className ="contentWrapper">
                <div className="navLogo">
                    <Link to="/"> <h2> ARL </h2> </Link>
                </div>

                <div className="navLinks">
                    
                    <NavLink to="/about"> About </NavLink>
                    <a> Projects </a>
                    <a> Contact </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
