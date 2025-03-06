import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Home from './pages/Home';
import Projects from './pages/Projects'; 
import About from './pages/About';       
import Contact from './pages/Contact';   

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
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/projects"
          element={<Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/about"
          element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/contact"
          element={<Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
