import React from 'react';
import { Link } from 'react-router-dom';
import './Hobby.css';

const Hobby = () => (
  <>
    <h1>My Hobbies</h1>
    <div className="container">
      <div className="hobby-grid">
        <div className="hobby-card">
          <p>♟️ Playing Chess</p>
          <Link to="/hobby/playing-chess">
            <button>Show More</button>
          </Link>
        </div>
        <div className="hobby-card">
          <p>📚 Reading Books</p>
          <Link to="/hobby/reading-books">
            <button>Show More</button>
          </Link>
        </div>
        <div className="hobby-card">
          <p>⚽ Playing Soccer</p>
          <Link to="/hobby/playing-soccer">
            <button>Show More</button>
          </Link>
        </div>
        <div className="hobby-card">
          <p>🎥 Watching Movies</p>
          <Link to="/hobby/watching-movies">
            <button>Show More</button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Hobby;
