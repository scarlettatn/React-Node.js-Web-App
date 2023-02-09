import React from 'react';
import './projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


function Projects() {
  return (
      <div className="projects"><FontAwesomeIcon icon={faCode} />
      <h1>PROJECTS</h1>
      <p>Group and personal projects </p>
      </div>
    );
  }

export default Projects;
