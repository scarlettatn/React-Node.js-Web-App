import React from 'react';
import './projectsoverview.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data';


function ProjectsOverview() {
  return (
    <div id="project" className="projects"><FontAwesomeIcon icon={faCode} />
      <h1>projects.</h1>
        <div className="projects-container">{projects.map((project) => (
          <div key={project.id}>{project.live ? (
            <a href={project.link}>
              <div>
                <img className="project-img" alt="project" src={project.image} />
              </div>
              <div className="project-title"> {project.title}
              </div>
              <div>
                <div className="project-description"> {project.description} </div>
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

export default ProjectsOverview;
