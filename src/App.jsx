import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopMenuBar from './components/TopMenuBar';
import Sidebar from './components/Sidebar';
import LayersPanel from './components/LayersPanel';
import Canvas from './components/Canvas';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/custom.css';

function App() {
  const [showLayers, setShowLayers] = useState(false);

  const toggleLayers = () => {
    setShowLayers(!showLayers);
  };

  return (
    <Router>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <TopMenuBar onToggleLayers={toggleLayers} />
        
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
          <Sidebar />
          
          <Canvas>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Canvas>
          
          <div className={`layers-panel ${showLayers ? 'show' : ''}`}>
            <div className="d-flex justify-content-between align-items-center mb-3 d-md-none">
              <h6 className="text-white mb-0">Layers Panel</h6>
              <button 
                className="btn btn-sm btn-outline-light"
                onClick={toggleLayers}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <LayersPanel />
          </div>
          
          {/* Overlay for mobile */}
          {showLayers && (
            <div 
              className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-md-none"
              style={{ opacity: 0.8, zIndex: 999 }}
              onClick={toggleLayers}
            ></div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;