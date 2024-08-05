import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="card-footer">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Deployed App</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          <FaGithub />
          </a>
      </div>
    </div>
  );
};


export default Project;
