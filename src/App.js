import React from 'react';
import { ExternalLink, Linkedin, Youtube, Terminal, ShieldCheck } from 'lucide-react';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-wrapper">
      <div className="glass-card">
        {/* Top Icon/Logo Section */}
        <div className="logo-container">
          <ShieldCheck size={48} color="#61dafb" />
        </div>

        <header>
          <h1>Welcome to My React App</h1>
          <p className="tagline">Running on <strong>Nginx</strong> in <strong>AWS EC2</strong></p>
        </header>

        <div className="info-section">
          <div className="deployed-by">
            <span className="label">DEPLOYED BY</span>
            <h2>Emmanuel Adekiitan</h2>
          </div>
          
          <div className="status-badge">
            <div className="dot"></div>
            <span>Status: Production Ready</span>
          </div>

          <p className="timestamp">Date: 19/01/2026</p>
        </div>

        <div className="mentor-note">
          <p>
            Part of the <strong>DevOps Micro Internship (DMI)  Cohort</strong> <br />
            run by <strong>Pravin Mishra</strong>.
          </p>
        </div>

        <div className="button-group">
          <a href="https://www.youtube.com/watch?v=qJD5UCdtjg4&list=PLVOdqXbCs7bX88JeUZmK4fKTq2hJ5VS89" target="_blank" rel="noreferrer" className="btn btn-yt">
            <Youtube size={18} /> YouTube Playlist
          </a>
          <a href="https://www.linkedin.com/in/pravin-mishra-aws-trainer/" target="_blank" rel="noreferrer" className="btn btn-li">
            <Linkedin size={18} /> LinkedIn Profile
          </a>
        </div>
      </div>
      
      <footer className="footer">
        <Terminal size={14} /> <span>{currentYear} DevOps Journey</span>
      </footer>
    </div>
  );
}

export default App;
