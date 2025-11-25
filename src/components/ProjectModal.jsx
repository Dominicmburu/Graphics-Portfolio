import React from 'react';
import { Modal } from 'react-bootstrap';

const ProjectModal = ({ show, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton style={{ background: '#252525', borderColor: '#3e3e3e' }}>
        <Modal.Title style={{ color: '#ffffff' }}>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: '#1e1e1e', color: '#ffffff' }}>
        <img src={project.image} alt={project.title} className="img-fluid rounded mb-3" />
        
        <div className="mb-3">
          <span className="badge bg-primary me-2">{project.category}</span>
          <span className="badge bg-secondary">{project.year}</span>
        </div>
        
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#b3b3b3' }}>
          {project.description}
        </p>
        
        <div className="mt-4">
          <h6 style={{ color: '#ffffff', marginBottom: '15px' }}>Tools Used:</h6>
          <div>
            {project.tools.map((tool, index) => (
              <span key={index} className="skill-badge me-2 mb-2">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ background: '#252525', borderColor: '#3e3e3e' }}>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
        <button className="btn btn-primary">
          View Full Project
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;