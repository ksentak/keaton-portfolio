import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <nav className='navbar navbar-expand-lg'>
          <div className='container'>
            <Link to='/' className='custom-logo-link' rel='home'>
              {/* INSERT CUSTOM LOGO IF I WANT OTHERWISE LEAVE BLANK */}
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul id='menu-primary' className='navbar-nav ml-auto'>
                {/* Home */}
                <li>
                  <NavLink
                    exact
                    to='/'
                    activeClassName='active'
                    className='nav-Link'
                  >
                    Home
                  </NavLink>
                </li>
                {/* About */}
                <li>
                  <NavLink
                    exact
                    to='/about'
                    activeClassName='active'
                    className='nav-Link'
                  >
                    About
                  </NavLink>
                </li>
                {/* Portfolio */}
                <li>
                  <NavLink
                    exact
                    to='/portfolio'
                    activeClassName='active'
                    className='nav-Link'
                  >
                    Portfolio
                  </NavLink>
                </li>
                {/* Resume */}
                {/* <li>
                  <NavLink
                    exact
                    to='/resume'
                    activeClassName='active'
                    className='nav-Link'
                  >
                    Resume
                  </NavLink>
                </li> */}
                {/* Contact */}
                <li>
                  <NavLink
                    exact
                    to='/contact'
                    activeClassName='active'
                    className='nav-Link'
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
