import React from 'react';
import About from './about';
import ProjectsOverview from './projectsoverview';
import Skills from './skills';
import Contact from './contact';

function Home() {
    return (
      <div className="container-home">
        <About />
        <ProjectsOverview />
        <Skills />
        <Contact />
      </div>
    );
  };

export default Home;
