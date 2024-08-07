import React from 'react';
import './skills.css';
import { skills } from "../data";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
// import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

function Skills() {
  return (
    <div id="skills">
      <FontAwesomeIcon icon={faGem} />
      <h1>skills.</h1>
      <div>
        <div className="skill-container">{skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div>
            <span className="material-symbols-outlined">
              verified
            </span>
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
    );
}

export default Skills;
