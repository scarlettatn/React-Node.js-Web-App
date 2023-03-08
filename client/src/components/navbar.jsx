import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a id="navbar-home" href="https://github.com/scarlettatn">Home</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a id="navbar-contact" href="https://github.com/scarlettatn">Contact Me</a>
    </nav>
  );
}

export default Navbar;
