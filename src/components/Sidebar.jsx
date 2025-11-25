import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tools = [
    { icon: 'bi-house-door-fill', path: '/', tooltip: 'Home' },
    { icon: 'bi-grid-3x3-gap-fill', path: '/portfolio', tooltip: 'Portfolio' },
    { icon: 'bi-person-fill', path: '/about', tooltip: 'About' },
    { icon: 'bi-envelope-fill', path: '/contact', tooltip: 'Contact' },
  ];

  return (
    <div className="sidebar-tools d-flex flex-column align-items-center py-3">
      {tools.map((tool, index) => (
        <div
          key={index}
          className={`d-flex align-items-center justify-content-center rounded my-1 ${
            location.pathname === tool.path ? 'bg-primary text-white' : 'text-secondary'
          }`}
          onClick={() => navigate(tool.path)}
          title={tool.tooltip}
          style={{ 
            width: '40px', 
            height: '40px', 
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if (location.pathname !== tool.path) {
              e.currentTarget.style.backgroundColor = '#3e3e3e';
              e.currentTarget.classList.add('text-white');
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== tool.path) {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.classList.remove('text-white');
              e.currentTarget.classList.add('text-secondary');
            }
          }}
        >
          <i className={`${tool.icon} fs-5`}></i>
        </div>
      ))}
      
      <div className="mt-auto">
        <div 
          className="d-flex align-items-center justify-content-center rounded text-secondary"
          title="Settings"
          style={{ 
            width: '40px', 
            height: '40px', 
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3e3e3e';
            e.currentTarget.classList.add('text-white');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.classList.remove('text-white');
          }}
        >
          <i className="bi bi-gear-fill fs-5"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;