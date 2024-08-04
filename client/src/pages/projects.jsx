import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { projects } from '../data';


/*In Link, it has to be ${project.id}  and not  ${project} otherwise the URL does not update with each project id */
function Projects() {
  return (
    <div>{projects.map((project) => (
      <div key={project.id}>{project.live ? (
        <Link key={project} to={`/projects/${project.id}`}>
          <div className="project-title">
            {project.title}
          </div>
          <div className="project-description">
            {project.description}
          </div>
        </Link>) : (
      <div>Error, project not live</div>
      )}
      </div>
    ))}
    </div>
  );
}

export default Projects;
