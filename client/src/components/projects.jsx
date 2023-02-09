import React from 'react';
import './projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data';


function Projects() {
  return (
      <div className="projects"><FontAwesomeIcon icon={faCode} />
        <h1>PROJECTS</h1>
        <p>Group and personal projects  </p>
          <div>{projects.map((project) => (
            // <div>{project}</div>
            <div>{project.image}
            <img className="project-img" alt="project" src={project.image} />
            </div>

          ))}
          </div>
      </div>
    );
  }

export default Projects;
