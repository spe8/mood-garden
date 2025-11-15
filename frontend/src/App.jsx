import { useState } from 'react';
import HomePage from './components/HomePage';
import MainRoom from './components/MainRoom';
import SongSearch from './components/SongSearch';
import Garden from './components/Garden';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app-container">
      {currentView === 'home' && <HomePage onNavigate={handleNavigate} />}
      
      {currentView === 'room' && <MainRoom onNavigate={handleNavigate} />}
      
      {currentView === 'search' && (
        <>
          <button
            onClick={() => handleNavigate('room')}
            className="retro-button"
            style={{
              position: 'fixed',
              top: '20px',
              left: '20px',
              zIndex: 100
            }}
          >
            🏠 Back to Room
          </button>
          <h1>🎵 Mood Garden</h1>
          <div className="retro-panel">
            <SongSearch />
          </div>
        </>
      )}
      
      {currentView === 'garden' && (
        <>
          <button
            onClick={() => handleNavigate('room')}
            className="retro-button"
            style={{
              position: 'fixed',
              top: '20px',
              left: '20px',
              zIndex: 100
            }}
          >
            🏠 Back to Room
          </button>
          <h1>🎵 Mood Garden</h1>
          <Garden />
        </>
      )}
    </div>
  );
}

export default App;