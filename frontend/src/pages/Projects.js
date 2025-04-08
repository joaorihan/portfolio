import React from 'react';
import Header from '../components/Header';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Project One",
    description: "A brief description of the project and its main features.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/joaorihan/project-one",
    demoLink: "https://project-one-demo.com"
  },
  {
    title: "Project Two",
    description: "Another project description highlighting its unique aspects.",
    technologies: ["Python", "Flask", "PostgreSQL"],
    githubLink: "https://github.com/joaorihan/project-two",
    demoLink: "https://project-two-demo.com"
  },
  {
    title: "Project Three",
    description: "Description of the third project and its impact.",
    technologies: ["TypeScript", "Next.js", "TailwindCSS"],
    githubLink: "https://github.com/joaorihan/project-three",
    demoLink: "https://project-three-demo.com"
  }
];

function Projects() {
  return (
    <div className="App">
      <Header />
      
      <main className="content-section">
        <h1 className="section-title">Projects</h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub className="link-icon" />
                  <span>View on GitHub</span>
                </a>
                {project.demoLink && (
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;
