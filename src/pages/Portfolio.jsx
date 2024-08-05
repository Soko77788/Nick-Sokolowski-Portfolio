import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Holidb Full Stack Web',
    image: './src/assets/Holidb.png',
    deployedLink: 'https://holidb.onrender.com/',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Radlibs Front-end',
    image: '/path/to/project1.png',
    deployedLink: 'https://mmhilbert.github.io/madlibs-project/',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Weather App Front-end',
    image: '/path/to/project1.png',
    deployedLink: 'https://soko77788.github.io/weather-dashboard-hw-6/',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Express Note Taker',
    image: '/path/to/project1.png',
    deployedLink: 'https://hw-11-express-note-taker.onrender.com/',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'MVC Bloggin It!',
    image: '/path/to/project1.png',
    deployedLink: 'https://hw-14-mvc-blog-site.onrender.com/',
    repoLink: 'https://github.com/your-github/project1'
  },
  {
    title: 'Back-end SVG Logo Generator',
    image: '/path/to/project1.png',
    deployedLink: 'https://drive.google.com/file/d/1bZEXALI_VwKr0tdS8m--rI7wYhV9Mmkj/view?pli=1',
    repoLink: 'https://github.com/your-github/project1'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
