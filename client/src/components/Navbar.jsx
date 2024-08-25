import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 2000);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='navbar'>
      <Link to='/'>
        <div className='navbar-logo'>
          <img className='navbar-logo-image' src={assets.logo} alt='logo' />
        </div>
      </Link>

      <div className='navbar-elements'>
        <NavLink to='/' className='navbar-elements-item'>
          Home
        </NavLink>
        <NavLink to='/collection' className='navbar-elements-item'>
          Collection
        </NavLink>
        <NavLink to='/about' className='navbar-elements-item'>
          About
        </NavLink>
        <NavLink to='/contact' className='navbar-elements-item'>
          Contact
        </NavLink>
      </div>

      <div className='navbar-icons'>
        <img src={assets.search_icon} alt='search' />
        <div 
          className='navbar-dp-items' 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <img className='navbar-dp' src={assets.profile_icon} alt='dp' />
          <div className={`navbar-dp-dropdown ${isDropdownVisible ? 'visible' : ''}`}>
            <p className='navbar-dp-dropdown-items'>Profile</p>
            <p className='navbar-dp-dropdown-items'>Orders</p>
            <p className='navbar-dp-dropdown-items'>Logout</p>
          </div>
        </div>
        <Link to='/cart'>
          <div className='navbar-icons-cart'>
            <img src={assets.cart_icon} alt='cart' />
            <p className='navbar-cart-number'>0</p>
          </div>
        </Link>
        <img 
          className="navbar-hamburger" 
          src={assets.menu_icon} 
          alt='menu' 
          onClick={toggleMenu} 
        />
      </div>

      {isMenuVisible && (
        <motion.div
          className='navbar-mobile-menu'
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <button className='navbar-mobile-menu-close' onClick={toggleMenu}>
            &times;
          </button>
          <NavLink to='/' className='navbar-mobile-menu-item' onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to='/collection' className='navbar-mobile-menu-item' onClick={toggleMenu}>
            Collection
          </NavLink>
          <NavLink to='/about' className='navbar-mobile-menu-item' onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to='/contact' className='navbar-mobile-menu-item' onClick={toggleMenu}>
            Contact
          </NavLink>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
