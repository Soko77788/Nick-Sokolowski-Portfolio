import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Quester MERN Stack',
    image: '/assets/quester-portfolio-screenshot.png',
    deployedLink: 'https://quester-407s.onrender.com/',
    repoLink: 'https://github.com/AranosBanazir/Quester'
  },
  {
    title: 'Holidb Full Stack App',
    image: '/assets/Holidb.png',
    deployedLink: 'https://holidb.onrender.com/',
    repoLink: 'https://github.com/Soko77788/holiDB'
  },
  {
    title: 'Radlibs Front-end',
    image: '/assets/radlibs.png',
    deployedLink: 'https://mmhilbert.github.io/madlibs-project/',
    repoLink: 'https://github.com/mmhilbert/madlibs-project'
  },
  {
    title: 'Weather App Front-end',
    image: '/assets/weather-app.png',
    deployedLink: 'https://soko77788.github.io/weather-dashboard-hw-6/',
    repoLink: 'https://github.com/Soko77788/weather-dashboard-hw-6'
  },
  {
    title: 'Express Note Taker',
    image: '/assets/note-taker.png',
    deployedLink: 'https://hw-11-express-note-taker.onrender.com/',
    repoLink: 'https://github.com/Soko77788/hw-11-express-note-taker'
  },
  {
    title: 'MVC Bloggin It!',
    image: '/assets/blogginit.png',
    deployedLink: 'https://hw-14-mvc-blog-site.onrender.com/',
    repoLink: 'https://github.com/Soko77788/hw-14-MVC-blog-site'
  },
  {
    title: 'Back-end SVG Logo Generator',
    image: '/assets/svg-logo-gen.png',
    deployedLink: 'https://drive.google.com/file/d/1bZEXALI_VwKr0tdS8m--rI7wYhV9Mmkj/view?pli=1',
    repoLink: 'https://github.com/Soko77788/hw-10-logo-generator'
  },
  // Add more projects here
];

// Map over each project

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
