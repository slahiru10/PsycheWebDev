import React, { useEffect, useState } from 'react';
import ARVRToggle from './components/ARVRToggle';
import ARPage from './components/ARPage';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

const App = () => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleConfirm = (mode) => {
    if (mode === 'AR') {
      setSelectedMode('AR');
    } else {
      alert('VR Mode selected - Feature coming soon!');
    }
  };

  const handleBack = () => {
    setSelectedMode(null);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`App ${selectedMode === 'AR' ? 'ar-mode' : ''}`}>
      {selectedMode !== 'AR' && (
        <div className="toggle-container">
          <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
          <div className="overlay">
            <h1 className="title">Psyche</h1>
            <ARVRToggle onConfirm={handleConfirm} darkMode={darkMode} />
          </div>
        </div>
      )}
      {selectedMode === 'AR' && (
        <ARPage onBack={handleBack} />
      )}
    </div>
  );
};

export default App;
