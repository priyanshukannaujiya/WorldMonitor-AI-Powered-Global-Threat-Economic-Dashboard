import React, { useState, useEffect } from 'react';
import './index.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import GlobalMap from './components/GlobalMap';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [view, setView] = useState<'dashboard' | 'map'>('dashboard');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Header currentView={view} onViewChange={setView} />

      {!dataLoaded ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
          <div className="animated-pulse" style={{ width: 100, height: 100, borderRadius: '50%', border: '2px solid var(--accent-cyan)' }}></div>
          <h2 className="text-gradient glow-text" style={{ marginTop: '2rem' }}>INITIALIZING NEURAL LINK...</h2>
        </div>
      ) : view === 'dashboard' ? (
        <Dashboard />
      ) : (
        <GlobalMap />
      )}
    </div>
  );
}

export default App;
