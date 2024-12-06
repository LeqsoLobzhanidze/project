import React from 'react';
import './Projects.css';
const Projects = () => (
    <div className="container">
    <h1>Projects Page</h1>
    <div className="project">
      <img src="/assets/dembele.png" alt="React Project" />
      <div className="project-details">
        <p>
          <strong>Project Overview:</strong> This project is about creating a responsive design using React and CSS. and DEMBELE
        </p>
        <a href="https://github.com/LeqsoLobzhanidze" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>
      </div>
    </div>
  </div>
  

);

export default Projects;
