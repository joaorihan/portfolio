import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio",
    description: "The website you are currently on! Built with React, Node.js and Java.",
    technologies: ["React", "Node.js", "Java"],
    githubLink: "https://github.com/joaorihan/portfolio",
    repo: "joaorihan/portfolio"
  },
  {
    title: "CourierPrime",
    description: "A unique mail system plugin for Spigot Minecraft servers",
    technologies: ["Java", "SpigotMC"],
    githubLink: "https://github.com/joaorihan/CourierPrime",
    repo: "joaorihan/CourierPrime"
  },
  {
    title: "SOAPoint",
    description: "Ordering system built with Java, Spring Boot for the SOA course at University.",
    technologies: ["Java", "Spring Boot"],
    githubLink: "https://github.com/joaorihan/SOAPoint",
    repo: "joaorihan/SOAPoint"
  },
  {
    title: "DeckOfCards",
    description: "A physical, customizable and simple 52-card deck framework for minecraft.",
    technologies: ["Java", "PaperMc"],
    githubLink: "https://github.com/joaorihan/DeckOfCards",
    repo: "joaorihan/DeckOfCards"
  },
  {
    title: "Todo-App",
    description: "A simple todo-app built with Python, Flask and SQLAlchemy.",
    technologies: ["Python", "Flask", "SQLAlchemy"],
    githubLink: "https://github.com/joaorihan/flask-todo-app",
    repo: "joaorihan/flask-todo-app"
  },
  {
    title: "RockPaperScissors",
    description: "An interactive two-hand rock-paper-scissors game built with C#.",
    technologies: ["C#"],
    githubLink: "https://github.com/joaorihan/rock-paper-scissors",
    repo: "joaorihan/rock-paper-scissors"
  },

];

function Projects() {
  const [repoData, setRepoData] = useState({});

  useEffect(() => {
    const fetchRepoData = async () => {
      const data = {};
      for (const project of projects) {
        try {
          const response = await fetch(`https://api.github.com/repos/${project.repo}`);
          const repoInfo = await response.json();
          data[project.repo] = {
            stars: repoInfo.stargazers_count,
            forks: repoInfo.forks_count
          };
        } catch (error) {
          console.error(`Error fetching data for ${project.repo}:`, error);
          data[project.repo] = { stars: 0, forks: 0 };
        }
      }
      setRepoData(data);
    };

    fetchRepoData();
  }, []);

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
                <div className="repo-stats">
                  {repoData[project.repo]?.stars > 0 && (
                    <div className="stats-count">
                      <FaStar className="star-icon" />
                      <span>{repoData[project.repo].stars}</span>
                    </div>
                  )}
                  {repoData[project.repo]?.forks > 0 && (
                    <div className="stats-count">
                      <FaCodeBranch className="fork-icon" />
                      <span>{repoData[project.repo].forks}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;
