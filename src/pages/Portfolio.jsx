import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    image: '/path/to/project1.png',
    deployedLink: 'https://project1.com',
    repoLink: 'https://github.com/your-github/project1'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
