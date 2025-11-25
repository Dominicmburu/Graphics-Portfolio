import React from 'react';
import Artboard from '../components/Artboard';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Artboard>
      <div className="text-center">
        <div className="mb-4 d-flex justify-content-center" style={{ animation: 'float 3s ease-in-out infinite' }}>
          <img 
            src="/images/steve1.png" 
            alt="Designer Logo" 
            className="img-fluid"
            style={{ 
              width: '250px', 
              height: '250px',
              maxWidth: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
        
        <h1 className="fw-bold mb-3 text-dark" style={{ fontSize: 'clamp(36px, 8vw, 64px)' }}>
          Creative Designer
        </h1>
        
        <p className="fs-5 text-muted mx-auto mb-5" style={{ maxWidth: '600px' }}>
          Transforming ideas into stunning visual experiences. Specializing in branding, digital design, and creative storytelling.
        </p>
        
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
          <Button 
            variant="primary" 
            size="lg" 
            className="px-4"
            onClick={() => navigate('/portfolio')}
          >
            <i className="bi bi-grid-3x3-gap me-2"></i>
            View Portfolio
          </Button>
          <Button 
            variant="outline-dark" 
            size="lg" 
            className="px-4"
            onClick={() => navigate('/contact')}
          >
            <i className="bi bi-envelope me-2"></i>
            Get in Touch
          </Button>
        </div>
        
        <Row className="mt-5 pt-5 border-top border-2 g-4">
          <Col md={4} className="mb-4">
            <div style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}>
              <i className="bi bi-brush-fill" style={{ fontSize: '40px', color: '#6f42c1' }}></i>
            </div>
            <h4 className="mt-3 text-dark fw-semibold">Creative Design</h4>
            <p className="text-muted">Unique and memorable designs that stand out</p>
          </Col>
          <Col md={4} className="mb-4">
            <div style={{ animation: 'float 3s ease-in-out infinite 1s' }}>
              <i className="bi bi-lightning-fill text-primary" style={{ fontSize: '40px' }}></i>
            </div>
            <h4 className="mt-3 text-dark fw-semibold">Fast Delivery</h4>
            <p className="text-muted">Quick turnaround without compromising quality</p>
          </Col>
          <Col md={4} className="mb-4">
            <div style={{ animation: 'float 3s ease-in-out infinite 1.5s' }}>
              <i className="bi bi-heart-fill text-danger" style={{ fontSize: '40px' }}></i>
            </div>
            <h4 className="mt-3 text-dark fw-semibold">Passion Driven</h4>
            <p className="text-muted">Every project is crafted with dedication</p>
          </Col>
        </Row>
      </div>
    </Artboard>
  );
};

export default Home;