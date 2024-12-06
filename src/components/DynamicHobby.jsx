import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DynamicHobby.css';

const hobbyDescriptions = {
  'playing-chess': 'Chess is a strategy game that I love for its complexity and mental challenge.',
  'reading-books': 'Reading allows me to escape to different worlds and gain new knowledge.',
  'playing-soccer': 'Soccer is fun and helps me stay active while enjoying the team spirit.',
  'watching-movies': 'Movies are a great way to relax and get immersed in different stories.',
};

const DynamicHobby = () => {
  const { hobby } = useParams(); 
  const description = hobbyDescriptions[hobby];

  return (
    <div className="dynamic-hobby-container">
      <Link to="/hobby" className="back-button">← Back</Link>
      <h1>{hobby.replace('-', ' ').toUpperCase()}</h1>
      <p>{description}</p>
    </div>
  );
};

export default DynamicHobby;
