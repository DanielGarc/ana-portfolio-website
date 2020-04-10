import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/logo-ARL.svg';
import '../../css/navbar.css';

//TODO: convert to functional component using useEffect, and useHistory
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { location: '', scrollTo: '' };

    this.ScrollToTop = this.ScrollToTop.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    // this.ScrollToTop();

    if (this.props.location !== undefined) {
      this.setState({
        location: this.props.location.pathname,
        scrollTo:
          this.props.location.state !== null &&
          this.props.location.state !== undefined
            ? this.props.location.state[0]
            : ''
      });
    }
  }

  ScrollToTop() {
    console.log('scroll to top');

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ScrollToBottom() {
    console.log('scroll to bottom');

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  render() {
    return (
      <div className='navWrapper'>
        {/* {this.state.location === '/' ? this.ScrollToTop() : ''} */}
        {this.state.scrollTo === 'down' ? this.ScrollToBottom() : ''}
        {this.state.scrollTo === 'up' ? this.ScrollToTop() : ''}
        <div className='navContent'>
          <div className='navLogo'>
            <Link to={{ pathname: '/', state: ['up'] }}>
              <div
                className='arl'
                onClick={() => {
                  this.setState({ scrollTo: 'up' });
                }}
              >
                <img
                src={logo}
                alt={logo}
        />
              </div>
            </Link>
          </div>
          <div className='navLinks'>
            <div className='navLinkText'>
              <NavLink
                to={{ pathname: '/about', state: ['up'] }}
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
                if (this.state.location !== '/') {
                  return this.props.history.push('/', ['down']);
                }

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
  }
}
