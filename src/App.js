import React, { useEffect, useState } from 'react';
import ARPage from './components/ARPage';
import CustomNavbar from './components/Navbar';
import './App.css';

const App = () => {
  const [selectedMode, setSelectedMode] = useState(null);

  const handleStartAR = () => {
    setSelectedMode('AR');
  };

  const handleBack = () => {
    setSelectedMode(null);
  };

  const handleHomeClick = () => {
    setSelectedMode(null);
  };

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  return (
    <div className={`App ${selectedMode === 'AR' ? 'ar-mode' : ''}`}>
      <CustomNavbar onHomeClick={handleHomeClick} />
      {selectedMode !== 'AR' && (
        <div className="start-container">
          <button className="start-button" onClick={handleStartAR}>
            START AR
          </button>
        </div>
      )}
      {selectedMode === 'AR' && (
        <ARPage onBack={handleBack} />
      )}
    </div>
  );
};

export default App;
