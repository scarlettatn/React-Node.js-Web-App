import React from 'react';
import './skills.css';
import { skills } from "../data";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <div>
      <FontAwesomeIcon icon={faMicrochip} />
      <h1>SKILLS</h1>
      <div>
        <div className="skill-container">{skills.map((skill) => (
          <div className="skill"><FontAwesomeIcon icon={faGear} /> {skill}</div>
        ))}
        </div>
      </div>
    </div>
    );
}

export default Skills;
