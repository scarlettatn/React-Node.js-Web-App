import React from 'react';
import './projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data';


function Projects() {
  return (
    <div className="projects"><FontAwesomeIcon icon={faCode} />
      <h1>projects.</h1>
        <div>{projects.map((project) => (
          <div>{project.live ? (
            <a href={project.link}>
              <div>
                <img className="project-img" alt="project" src={project.image} />
              </div>
            </a>
          ) : (
            <div></div>
          )}
        </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
