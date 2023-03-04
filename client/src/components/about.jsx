import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-container-text">
          <h1>hi, i'm scarlett</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="about-container-img"><img alt="illustration" src="./illu1.png"></img></div>
        </div>
      <div className="container">
        <a className="button-contact" href="#contact">Work with me</a>
        <a className="button-projects" href="#projects">See my projects</a>
      </div>
    </div>
  );
}

export default About;
