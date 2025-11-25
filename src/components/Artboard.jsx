import React from 'react';

const Artboard = ({ children, title }) => {
  return (
    <div className="bg-white rounded-3 p-5 mx-auto shadow-lg artboard-animate" style={{ maxWidth: '900px' }}>
      {title && (
        <div className="mb-4 pb-3 border-bottom border-2">
          <h2 className="text-dark fw-bold" style={{ fontSize: '32px' }}>{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
};

export default Artboard;