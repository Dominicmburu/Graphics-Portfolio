import React, { useEffect } from 'react';

const Canvas = ({ children }) => {
  // Create ripple effect on click
  const createRipple = (e) => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = ripple.style.height = '50px';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  useEffect(() => {
    document.addEventListener('click', createRipple);
    return () => {
      document.removeEventListener('click', createRipple);
    };
  }, []);

  return (
    <div className="canvas-area flex-grow-1 p-4 position-relative">
      {/* Animated Background with Design Tools */}
      <div className="design-tools-bg">
        <i className="floating-tool bi bi-brush-fill"></i>
        <i className="floating-tool bi bi-pencil-fill"></i>
        <i className="floating-tool bi bi-paint-bucket"></i>
        <i className="floating-tool bi bi-palette-fill"></i>
        <i className="floating-tool bi bi-bezier2"></i>
        <i className="floating-tool bi bi-vector-pen"></i>
      </div>
      
      {/* Content */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Canvas;