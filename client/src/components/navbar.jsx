import React from 'react';
import './navbar.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// import { Link, animateScroll as scroll } from "react-scroll";

// in Skills and Contact, div need to have id=skills and id=navbar to work with scroll
function Navbar() {
  return (
    <nav className="navbar">
      <a id="navbar-home" href="/"><strong>Home</strong></a>
      <RouterLink to="/projects">Portfolio</RouterLink>
    </nav>
  );
}

export default Navbar;
