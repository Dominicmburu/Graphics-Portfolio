import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TopMenuBar = ({ onToggleLayers }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { name: 'File', path: '/' },
    { name: 'Edit', path: '/portfolio' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="top-menu-bar d-flex align-items-center px-3">
      <div className="d-flex align-items-center">
        <i className="bi bi-palette-fill me-3 text-primary fs-5"></i>
        <div className="d-none d-md-flex">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item px-3 py-1 rounded cursor-pointer user-select-none small ${
                location.pathname === item.path ? 'bg-primary text-white' : 'text-white'
              }`}
              onClick={() => handleClick(item)}
              style={{ cursor: 'pointer' }}
            >
              {item.name}
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="btn btn-sm btn-outline-light d-md-none ms-2"
          onClick={onToggleLayers}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
      
      <div className="ms-auto d-flex align-items-center gap-3">
        <span className="small text-secondary d-none d-sm-inline">
          <i className="bi bi-clock me-1"></i>
          {time}
        </span>
        <div className="d-flex align-items-center">
          <i className="bi bi-circle-fill text-success me-2" style={{ fontSize: '8px' }}></i>
          <span className="small text-secondary d-none d-sm-inline">Active</span>
        </div>
      </div>
    </div>
  );
};

export default TopMenuBar;