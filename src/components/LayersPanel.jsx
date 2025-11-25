import React from 'react';
import { useLocation } from 'react-router-dom';

const LayersPanel = () => {
  const location = useLocation();

  const layerSets = {
    '/': [
      { name: 'Welcome Text', icon: 'bi-type', visible: true },
      { name: 'Hero Background', icon: 'bi-image', visible: true },
      { name: 'Navigation', icon: 'bi-menu-button', visible: true }
    ],
    '/portfolio': [
      { name: 'All Projects', icon: 'bi-grid-3x3', visible: true },
      { name: 'Branding', icon: 'bi-tag', visible: true },
      { name: 'Print Design', icon: 'bi-printer', visible: true },
      { name: 'Digital', icon: 'bi-phone', visible: true },
      { name: 'UI/UX', icon: 'bi-laptop', visible: true }
    ],
    '/about': [
      { name: 'Profile', icon: 'bi-person-circle', visible: true },
      { name: 'Bio', icon: 'bi-file-text', visible: true },
      { name: 'Skills', icon: 'bi-star', visible: true },
      { name: 'Experience', icon: 'bi-briefcase', visible: true }
    ],
    '/contact': [
      { name: 'Contact Form', icon: 'bi-envelope', visible: true },
      { name: 'Social Links', icon: 'bi-share', visible: true },
      { name: 'Location', icon: 'bi-geo-alt', visible: true }
    ]
  };

  const currentLayers = layerSets[location.pathname] || layerSets['/'];

  return (
    <div className="layers-panel p-3 overflow-auto">
      <h6 className="text-uppercase text-secondary small fw-semibold mb-3" style={{ letterSpacing: '0.5px', fontSize: '11px' }}>
        Layers
      </h6>
      
      {currentLayers.map((layer, index) => (
        <div 
          key={index} 
          className={`d-flex align-items-center p-2 mb-2 rounded small ${
            index === 0 ? 'bg-primary text-white shadow-sm' : 'bg-dark text-white'
          }`}
          style={{ cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={(e) => {
            if (index !== 0) {
              e.currentTarget.style.backgroundColor = '#3e3e3e';
            }
          }}
          onMouseLeave={(e) => {
            if (index !== 0) {
              e.currentTarget.style.backgroundColor = '#161616';
            }
          }}
        >
          <i className={`${layer.icon} me-2`}></i>
          <span className="flex-grow-1">{layer.name}</span>
          <i className={`bi ${layer.visible ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`} style={{ fontSize: '14px', opacity: 0.5 }}></i>
        </div>
      ))}
      
      <div className="mt-4">
        <h6 className="text-uppercase text-secondary small fw-semibold mb-3" style={{ letterSpacing: '0.5px', fontSize: '11px' }}>
          Properties
        </h6>
        <div className="small text-secondary" style={{ lineHeight: '1.8' }}>
          <div className="d-flex justify-content-between mb-2">
            <span>Opacity:</span>
            <span>100%</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Blend Mode:</span>
            <span>Normal</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Position:</span>
            <span>X: 0, Y: 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayersPanel;