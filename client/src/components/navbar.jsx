import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
// import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <a id="navbar-home" href="https://github.com/scarlettatn"><strong>Home</strong></a>
      <Link to="projects" smooth duration={500}>Portfolio</Link>
      <Link to="skills" smooth duration={500}>Skills</Link>
      <a id="navbar-contact" href="https://github.com/scarlettatn">Contact</a>
    </nav>
  );
}

export default Navbar;

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <a id="navbar-home" href="https://github.com/scarlettatn"><strong>Home</strong></a>
//       <a href="#projects">Portfolio</a>
//       <a href="#skills">Skills</a>
//       <a id="navbar-contact" href="https://github.com/scarlettatn">Contact</a>
//     </nav>
//   );
// }
