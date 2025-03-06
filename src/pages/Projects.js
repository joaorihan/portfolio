import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header';

function Projects() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  // ----- PROJECTS DATA -----
  const projects = [
    {
      header: 'Project Header',
      subheader: 'Subhead',
      title: 'Title',
      subtitle: 'Subtitle',
      technologies: [
        { name: 'Python', color: '#3776AB' },
        { name: 'Flask', color: '#000000' },
      ],
      about:
        'Brief description of the project. Click "About" to see more details in the modal.',
      sourceCode: 'https://github.com/username/project1',
    },
    {
      header: 'Project Header',
      subheader: 'Subhead',
      title: 'Another Title',
      subtitle: 'Another Subtitle',
      technologies: [{ name: 'Java', color: '#007396' }],
      about:
        'Detailed info about the second project. You can write as much as you want here.',
      sourceCode: 'https://github.com/username/project2',
    },
    {
      header: 'Project Header',
      subheader: 'Subhead',
      title: 'Yet Another Title',
      subtitle: 'Yet Another Subtitle',
      technologies: [
        { name: 'React', color: '#61dafb' },
        { name: 'Node.js', color: '#3C873A' },
      ],
      about:
        'Detailed info about the third project. This can be customized as needed.',
      sourceCode: 'https://github.com/username/project3',
    },
    {
        header: 'Project Header',
        subheader: 'Subhead',
        title: 'Yet Another Title',
        subtitle: 'Yet Another Subtitle',
        technologies: [
          { name: 'React', color: '#61dafb' },
          { name: 'Node.js', color: '#3C873A' },
        ],
        about:
          'Detailed info about the third project. This can be customized as needed.',
        sourceCode: 'https://github.com/username/project3',
      }
  ];

  // ----- MODAL STATE & HANDLERS -----
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Reusable Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* MAIN CONTENT: PROJECTS GRID */}
      <div className="container my-4">
        <div className="row">
          {projects.map((project, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100">
                {/* Card Header */}
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{project.header}</strong>
                    <br />
                    <small>{project.subheader}</small>
                  </div>
                  {/* 3-dot menu (Bootstrap Icons) */}
                  <button className="btn btn-link text-muted">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  {/* Placeholder for project image or shapes */}
                  <div
                    className="bg-secondary mb-3"
                    style={{ height: '150px' }}
                  ></div>

                  <h5 className="card-title">{project.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {project.subtitle}
                  </h6>

                  <p className="mb-2 fw-bold">Technologies used</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="badge me-2"
                        style={{
                          backgroundColor: tech.color,
                          color: '#fff',
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleShowModal(project)}
                  >
                    About
                  </button>
                  <a
                    href={project.sourceCode}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (shows only if a project is selected) */}
      {selectedProject && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedProject.title} - About
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedProject.about}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
