import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <div className="header">
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Selvaharshini Easwaran
          </motion.h1>
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
        <p className="subtitle">Software Developer | Backend & Cloud Enthusiast</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/selvaharshini" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/Selvaharshini" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} /> GitHub
          </a>
          <a href="mailto:easwarsi@mail.uc.edu">
            <FaEnvelope size={20} /> Contact
          </a>
          <a href="/resume.pdf" download>
            <FaDownload size={20} /> Resume
          </a>
        </div>

        <div className="section">
          <h2>Education</h2>
          <p>🎓 Master’s in Computer Science, University of Cincinnati (2023 - 2025)</p>
          <p>🎓 Bachelor’s in Computer Science, Kumaraguru College of Technology (2017 - 2021)</p>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <p>🚀 Python, Java, C++, JavaScript, SQL</p>
          <p>🌐 Spring Boot, React, Node.js, AWS</p>
          <p>🛠️ Docker, Kubernetes, CI/CD</p>
        </div>

        <div className="section">
          <h2>Work Experience</h2>
          <p><strong>Software Developer | Humana, USA (Jul 2024 - Dec 2024)</strong></p>
          <ul>
            <li>Migrated legacy pharmacy systems using Appian’s AI, improving data extraction by 40%.</li>
            <li>Optimized AWS-based SQL databases, saving 12+ hours weekly and reducing costs by 7%.</li>
          </ul>
          <p><strong>Software Engineer | Bosch, India (Jul 2021 - Jul 2023)</strong></p>
          <ul>
            <li>Optimized SQL queries, improving execution times by 25%.</li>
            <li>Developed REST APIs integrating sales data with SAP and Tableau, reducing transaction time by 15%.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

