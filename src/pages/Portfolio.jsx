import React, { useState } from 'react';
import { projects, categories } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import { Card, Badge, ButtonGroup, Button } from 'react-bootstrap';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
      <div className="mb-4">
        <h2 className="text-white mb-4 fw-bold display-5">
          <i className="bi bi-grid-3x3-gap-fill me-3 text-primary"></i>
          My Projects
        </h2>
        
        <ButtonGroup className="mb-4 flex-wrap gap-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? 'primary' : 'outline-light'}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <div className="row g-4">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="col-12 col-sm-6 col-lg-4"
            style={{ 
              animation: `artboardZoom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s backwards`
            }}
          >
            <Card 
              bg="dark" 
              text="white" 
              className="border-secondary h-100 shadow-sm project-card-enhanced"
              onClick={() => handleProjectClick(project)}
            >
              <div style={{ overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={project.title}
                  className="project-img-zoom"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-semibold d-flex align-items-center">
                  <i className="bi bi-file-earmark-image me-2 text-primary"></i>
                  {project.title}
                </Card.Title>
                <Card.Text className="text-secondary small">
                  {project.description}
                </Card.Text>
                <div className="mt-3 d-flex flex-wrap gap-2">
                  <Badge bg="primary">{project.category}</Badge>
                  <Badge bg="secondary">{project.year}</Badge>
                  {project.tools.slice(0, 2).map((tool, i) => (
                    <Badge key={i} bg="dark" className="border border-secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center text-white py-5">
          <i className="bi bi-inbox display-1 opacity-25 loading-spinner"></i>
          <p className="mt-3 fs-5 text-secondary">
            No projects found in this category
          </p>
        </div>
      )}

      <ProjectModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        project={selectedProject}
      />
    </>
  );
};

export default Portfolio;