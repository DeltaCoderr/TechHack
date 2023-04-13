import { useState } from 'react';
import { ReactComponent as Hamburger } from '../../assets/Hamburger.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './navbar.css';
import React from 'react';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%' }}>
      <div className="container">
        <div className="logo">
       <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <NavLink >Event</NavLink>
            </li> */}
            <li>
              <a href="#themes" >Themes</a>
            </li>
            <li>
              <a href="#sponsors" >Sponsors</a>
            </li>
            <a target="_blank" rel="noreferrer" href="https://forms.gle/eLFC6ztVSEj6QzMG9">
            <button class="inline-flex items-center bg-gray-100 border-0 text-black py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >Register</button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar