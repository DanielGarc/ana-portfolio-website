import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import '../css/navbar.css';

import Home from '../App';
import About from '../About.js';

const NavBar = () => {
    return (
        <Router>
        <div className="navWrapper">
            <div className ="contentWrapper">
                <div className="navLogo">
                    <h2> ARL </h2>
                </div>

                <div className="navLinks">
                    <a> 
                        <NavLink exact="/about"> About </NavLink>
                    </a>
                    <a> Projects </a>
                    <a> Contact </a>
                </div>
            </div>

            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </div>
        </div>
        </Router>
    )
}

export default NavBar;
