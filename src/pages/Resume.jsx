import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2 className="resume-title">Resume</h2>
      <div className="resume-download">
        <a href="/path/to/your/resume.pdf" download>
          <img src="./src/assets/resumeIcon.png" alt="Download Resume" className="download-icon" />
        </a>
        <p className="download-text">Download Resume</p>
      </div>
      <h2 className="resume-title" id="resume-border">Proficiencies</h2>
      <ul className="li-style">
        <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS</li>
        <li><strong>Backend Development:</strong> Node.js, Express.js, MongoDB, Postgres SQL, Sequelize, RESTful APIs</li>
        <li><strong>Tools and Technologies:</strong> Git, GitHub, Webpack, Vite, NPM, Jest, Insomnia, MongoDB Compass</li>
      </ul>
    </section>
  );
}


export default Resume;
