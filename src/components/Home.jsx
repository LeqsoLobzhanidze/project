import React, { useState } from "react";
import './Home.css';

const Home = () => {
  const [funFact, setFunFact] = useState("");

  const facts = [
    "I once completed a Rubik's cube in under 2 minutes!",
    "I can name all the countries in the world in under 10 minutes.",
    "I have a collection of over 100 rare coins.",
    "I can solve complex algorithms in my head while walking.",
  ];

  const generateFunFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFunFact(randomFact);
  };

  return (
    <div className="container">
      <div className="home-content">
        <img src="/assets/dembele.png" alt="Profile" />
        <h1>Welcome to My Portfolio</h1>
        <p>Random info about MYSELF: I'm a coding enthusiast and a hobbyist gamer.</p>
        <p>Contact Info:</p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com">github.com/my-profile</a>
        </p>
        <p>
          <strong>Email:</strong> example@email.com
        </p>

        <div className="fun-fact">
          <button onClick={generateFunFact}>Show Random Fun Fact</button>
          {funFact && <p className="fact">{funFact}</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;
