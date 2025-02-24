import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import darkIcon from './img/dark-mode.png';
import lightIcon from './img/light-mode.png';

function App() {
  // Check local storage for theme preference
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="App">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">joaorihan.dev</a>
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
                <a className="nav-link" href="home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="projects">Projects</a>
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

      {/* Hero Section */}
      <main className="hero-section" id="home">
        <h1>Hi, I'm Brittany</h1>
        <p>I'm a UX designer. I'm passionate about</p>
        <div class="dropping-texts">
          <div>Developers</div>
          <div>Designers</div>
          <div>Coders</div>
          <div>EVERYONE!</div>
        </div>

        <div className="social-icons">
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="behance-icon">
            Bē
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            in
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
