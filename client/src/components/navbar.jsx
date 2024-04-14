import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a id="navbar-home" href="https://github.com/scarlettatn"><strong>Home</strong></a>
      <a href="#projects">Portfolio</a>
      <a href="#skills">Skills</a>
      <a id="navbar-contact" href="https://github.com/scarlettatn">Contact</a>
    </nav>
  );
}

export default Navbar;
