// src/App.js
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Home from './components/pages/Home';
import './App.css';

// Lazy load modal components
const Overview = lazy(() => import('./components/pages/Overview'));
const LeadEnrichment = lazy(() => import('./components/pages/LeadEnrichment'));
const LeadScoring = lazy(() => import('./components/pages/LeadScoring'));
const Automation = lazy(() => import('./components/pages/Automation'));
const Dashboard = lazy(() => import('./components/pages/Dashboard'));

function App() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to track the current section/modal
  const [currentSection, setCurrentSection] = useState('overview');

  // Array defining the sequence of sections
  const sections = ['overview', 'enrichment', 'scoring', 'automation', 'dashboard'];

  // Handler to open the modal and set the initial section
  const handleExplore = () => {
    console.log('handleExplore called in App');
    setIsModalOpen(true);
    setCurrentSection('overview');
    console.log('Modal should be open:', true);
  };

  // Function to navigate to the next section
  const nextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    console.log(`Current Section: ${currentSection}, Index: ${currentIndex}`);

    if (currentIndex < sections.length - 1) {
      const next = sections[currentIndex + 1];
      setCurrentSection(next);
      console.log(`Navigating to section: ${next}`);
    } else {
      // Optionally close the modal if it's the last section
      setIsModalOpen(false);
      console.log('Reached the end of sections. Modal closed.');
    }
  };

  // Function to navigate to the previous section
  const prevSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    console.log(`Current Section: ${currentSection}, Index: ${currentIndex}`);

    if (currentIndex > 0) {
      const prev = sections[currentIndex - 1];
      setCurrentSection(prev);
      console.log(`Navigating to section: ${prev}`);
    }
  };

  // Function to render the appropriate modal based on the current section
  const renderModal = () => {
    console.log(`Rendering modal for section: ${currentSection}`);
    switch(currentSection) {
      case 'overview':
        return (
          <Overview
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onNext={nextSection}
            onPrev={prevSection}
          />
        );
      case 'enrichment':
        return (
          <LeadEnrichment
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onNext={nextSection}
            onPrev={prevSection}
          />
        );
      case 'scoring':
        return (
          <LeadScoring
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onNext={nextSection}
            onPrev={prevSection}
          />
        );
      case 'automation':
        return (
          <Automation
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onNext={nextSection}
            onPrev={prevSection}
          />
        );
      case 'dashboard':
        return (
          <Dashboard
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onNext={nextSection}
            onPrev={prevSection}
          />
        );
      default:
        return null;
    }
  };

  // Effect to log initial mount
  useEffect(() => {
    console.log(`App Component Mounted. isModalOpen: ${isModalOpen}, currentSection: ${currentSection}`);
  }, []);

  // Effect to log state changes
  useEffect(() => {
    console.log(`Modal State Updated. isModalOpen: ${isModalOpen}, currentSection: ${currentSection}`);
  }, [isModalOpen, currentSection]);

  return (
    <div className="App">
      {/* Home component with the "Explore Our Solution" button */}
      <Home onExplore={handleExplore} />

      {/* Suspense to handle lazy-loaded components */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        {isModalOpen && renderModal()}
      </Suspense>
    </div>
  );
}

export default App;
