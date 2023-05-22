import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-dark-m.webp';
import '../styles/Navbar.css';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-background-color' aria-hidden='true'></div>
      <div className='navbar-container'>
        <NavLink
          className='navbar-logo'
          aria-label='click to go to home page'
          to='/'
        >
          <img
            className='logo-img'
            aria-hidden='true'
            src={logo}
            decoding='async'
            alt='logo'
          />
        </NavLink>

        <div
          id='navbar-menu'
          className={`nav-elements  ${showNavbar && 'active'}`}
        >
          <ul>
            <li>
              <NavLink aria-label='click to go to home page' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink aria-label='click to go to about page' to='/about'>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink aria-label='click to go to contact page' to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Nav toggle */}
        <button
          aria-label='Hamburger menu button'
          className={`hamburger-menu ${showNavbar && 'clicked'}`}
          onClick={handleShowNavbar}
        >
          <span aria-hidden='true'></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
