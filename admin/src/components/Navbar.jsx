import React from 'react'
import {assets} from '../assets/assets'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='navbar-logo'>Diago Admin Panel</h1>
      <button className='navbar-button'>Logout</button>
    </div>
  )
}

export default Navbar
