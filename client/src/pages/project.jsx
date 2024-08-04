import React from 'react';
// import { Link } from 'react-router-dom';
// import { projects } from '../data';
import { useParams } from 'react-router-dom';
import { projects } from '../data';


/* Fetch the actual profile */
/* Adding useParams to return the parameters available for specific page i.e. projects/1 or projects/2 */
/* useParams = params from the URL e.g 1 or 2*/
function Project() {
const params = useParams();
// console.log(params);

// const { id } = useParams(); // Destructure id from useParams
// const project = projects.find((project) => project.id === parseInt(id)); // Find the project by id

  return (
    <div>hi
    </div>
  );
}

export default Project;
