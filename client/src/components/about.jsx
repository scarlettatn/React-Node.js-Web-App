import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about-info">
        <div>
          <h1>scarlett ah-thon</h1>
          <p>
            I'm a full stack developer with a background in
            finance. Recently graduated from Le Wagon
            intensive full stack web development bootcamp.
            I value an international environment having studied
            and worked in various countries in multicultural
            teams (France, USA, UK, Luxembourg and Portugal).
          </p>
        </div>
        <div><img alt="illustration" src="./illu1.png"></img></div>
        </div>
      <div className="container">
          <div className="button-contact">
            <a href="#contact">Work with me</a>
          </div>
          <div className="button-projects">
            <a href="#projects">See my projects</a>
          </div>
        </div>
    </div>
  );
}

export default About;
