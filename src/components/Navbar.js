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
                <li>
                  <NavLink
                    exact
                    activeClassName='active'
                    to='/'
                    className='nav-Link'
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <a href='#services' className='nav-Link'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='#about' className='nav-Link'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#skills' className='nav-Link'>
                    Skills
                  </a>
                </li>
                <li>
                  <a href='#contact' className='nav-Link'>
                    Contact
                  </a>
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
