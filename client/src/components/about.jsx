import React from 'react';
import './about.css';
import { Link as RouterLink } from 'react-router-dom';


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
        <a className="button-skills" href="#skills">My skills</a>
        <RouterLink to="/projects" className="button-projects" >See my projects</RouterLink>
      </div>
    </div>
  );
}

export default About;
