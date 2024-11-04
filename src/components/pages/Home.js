import React from 'react';

const Home = ({ onExplore }) => {
  const handleClick = () => {
    console.log('Button clicked in Home');
    if (onExplore) {
      onExplore();
    } else {
      console.log('onExplore is undefined');
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Optimizing Lead Management with Data-Driven Strategies</h1>
        <p>
          This presentation delivers a comprehensive plan to enhance your lead management process
          through advanced lead enrichment and a tailored lead scoring model.
        </p>
        <div className="diagram-container">
          {/* Your diagram will go here */}
        </div>
        <button
          onClick={handleClick}
          className="cta-button"
        >
          Explore Our Solution
        </button>
      </div>
    </section>
  );
};

export default Home;
