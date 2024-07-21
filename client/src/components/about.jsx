import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-container-text">
          <h1>meet me</h1>
          <p>
          Hello, I'm Scarlett and I come from a background in Finance. Recently, I decided to embark on an new career path as a full-stack developer.
          </p>
        </div>
        </div>
      <div className="container">
        <a className="button-contact" href="#contact">Work with me</a>
        <a className="button-projects" href="#projects">See my projects</a>
      </div>
    </div>
  );
}

export default About;
