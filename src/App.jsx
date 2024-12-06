import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Hobby from './components/Hobby';
import DynamicHobby from './components/DynamicHobby';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/hobby">Hobby</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/hobby/:hobby" element={<DynamicHobby />} />
      </Routes>
    </Router>
  );
}

export default App;
