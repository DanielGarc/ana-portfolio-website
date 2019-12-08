import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../css/navbar.css';

const NavBar = props => {
  return (
    <div className='navWrapper'>
      <div className='contentWrapper'>
        <div className='navLogo'>
          <Link to='/'>
            <div className='arl'>ARL</div>
          </Link>
        </div>
        <div className='navLinks'>
          <div className='navLinkText'>
            <NavLink
              to='/about'
              className='navLink'
              activeClassName='navLinkActive'
            >
              About
            </NavLink>
          </div>
          {/* <div className='navLinkText'>
            <NavLink
              to='/projects'
              className='navLink'
              activeClassName='navLinkActive'
            >
              Projects
            </NavLink>
          </div> */}
          {/* <div className='navLinkText'>Projects</div> */}
          <div
            className='navLinkText'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
              });
            }}
          >
            <div className='navLink'>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
