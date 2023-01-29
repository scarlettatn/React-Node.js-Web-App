import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <h1>Hi, I'm Scarlett</h1>
      <p>
        Junior full stack developer with a background in
        finance. Recently graduated from Le Wagon
        intensive full stack web development bootcamp.
        I value an international environment having studied
        and worked in various countries in multicultural
        teams (France, USA, UK, Luxembourg and Portugal).
      </p>
        <div container>
          <div className="button-contact">
            <a href="#contact">Work with me</a>
          </div>
          <div className="button-projects">
            <a href="#projects">See my past projects</a>
          </div>
        </div>
    </div>
  );
}

export default About;
