import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import darkIcon from '../img/dark-mode.png';
import lightIcon from '../img/light-mode.png';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">joaorihan.dev</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
          </ul>
          <button className="toggle-btn" onClick={toggleDarkMode}>
            <img
              src={darkMode ? lightIcon : darkIcon}
              alt={darkMode ? "Light Mode" : "Dark Mode"}
              className="toggle-icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
