import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { projects } from '../data';


/* Fetch the actual profile */
/* Adding useParams to return the parameters available for specific page i.e. projects/1 or projects/2 */
/* useParams = params from the URL e.g 1 or 2*/
function Project() {

// Refactored the below code by using Destructuring Assignment in Javascript:
const params = useParams();      //params is an object
// const id = params.id;    extracting id from params

// Returns id from  useParams() i.e. from  { Projectid: '1' }
//const { id } = useParams();
// Has to be projectID not id
const id = parseInt(params.projectId);
console.log(id);

// Find the project with the matching id
const project = projects.find((project) => project.id === id);

//Error handling
if (!project) {
  return <div>Project not found</div>;
}

return (
  <div key={project.id}>
    <div>
      {project.title}
    </div>
      <Link to="/projects">Back</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Project;

{/* Using anchor tag <a> instead of <link> allows to avoid refreshing the whole page to go to Home page, only using javascript without requesting the whole html and javascript again */}
