import React from 'react';
import './skills.css';
import { skills } from "../data";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
// import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

function Skills() {
  return (
    <div>
      <FontAwesomeIcon icon={faGem} />
      <h1>skills.</h1>
      <div>
        <div className="skill-container">{skills.map((skill) => (
          <div className="skill-card">
            <div>
            <span class="material-symbols-outlined">
              verified
            </span>
            </div>
            <div className="skill-name">{skill}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
    );
}

export default Skills;
