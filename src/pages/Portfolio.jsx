import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    image: '/path/to/project1.png',
    deployedLink: 'https://project1.com',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Project 2',
    image: '/path/to/project1.png',
    deployedLink: 'https://project1.com',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Project 3',
    image: '/path/to/project1.png',
    deployedLink: 'https://project1.com',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Project 4',
    image: '/path/to/project1.png',
    deployedLink: 'https://project1.com',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Project 5',
    image: '/path/to/project1.png',
    deployedLink: 'https://project1.com',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Project 6',
    image: '/path/to/project1.png',
    deployedLink: 'https://project1.com',
    repoLink: 'https://github.com/your-github/project1'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="grid-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
