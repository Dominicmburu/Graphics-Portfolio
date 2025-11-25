import React from 'react';
import Artboard from '../components/Artboard';
import { Row, Col, Badge } from 'react-bootstrap';

const About = () => {
  const skills = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Figma',
    'Sketch',
    'After Effects',
    'XD',
    'Procreate',
    'Typography',
    'Color Theory',
    'Brand Identity',
    'UI/UX Design'
  ];

  const socialLinks = [
    { icon: 'bi-linkedin', url: 'https://linkedin.com', color: '#0077b5' },
    { icon: 'bi-instagram', url: 'https://instagram.com', color: '#E4405F' },
    { icon: 'bi-behance', url: 'https://behance.net', color: '#1769ff' },
    { icon: 'bi-dribbble', url: 'https://dribbble.com', color: '#ea4c89' },
    { icon: 'bi-github', url: 'https://github.com', color: '#333' },
    { icon: 'bi-twitter', url: 'https://twitter.com', color: '#1DA1F2' }
  ];

  return (
    <Artboard title="About Me">
      <Row className="g-4">
        <Col md={4} className="text-center mb-4">
          <div 
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center bg-gradient shadow-lg"
            style={{ 
              width: '200px', 
              height: '200px',
              background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
              animation: 'pulse 3s ease-in-out infinite'
            }}
          >
            <i className="bi bi-person-fill text-white" style={{ fontSize: '100px' }}></i>
          </div>
          
          <h3 className="mt-4 text-dark fw-bold">Stephen Gathima</h3>
          <p className="text-muted fs-6">Graphic Designer</p>
          <p className="text-muted small">
            <i className="bi bi-geo-alt-fill me-1"></i>
            Nairobi, Kenya
          </p>
          
          <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ 
                  fontSize: '24px',
                  color: social.color,
                  transition: 'all 0.3s',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.3) rotate(10deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <i className={`bi ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </Col>
        
        <Col md={8}>
          <h4 className="text-dark fw-bold mb-3">
            <i className="bi bi-info-circle-fill text-primary me-2"></i>
            Hi, I'm a Graphic Designer
          </h4>
          
          <p className="text-muted lh-lg mb-3">
            With over 5 years of experience in the creative industry, I specialize in creating 
            compelling visual narratives that resonate with audiences. My passion lies in 
            transforming complex ideas into simple, elegant designs that communicate effectively.
          </p>
          
          <p className="text-muted lh-lg mb-3">
            I've had the privilege of working with diverse clients across various industries, 
            from startups to established brands. Each project is an opportunity to push creative 
            boundaries and deliver exceptional results.
          </p>
          
          <p className="text-muted lh-lg mb-4">
            When I'm not designing, you can find me exploring art galleries, experimenting with 
            photography, or staying updated with the latest design trends.
          </p>
          
          <h5 className="text-dark fw-bold mb-3">
            <i className="bi bi-tools text-primary me-2"></i>
            Skills & Tools
          </h5>
          
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                bg="light" 
                text="dark" 
                className="px-3 py-2 border"
                style={{ 
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)';
                  e.currentTarget.style.backgroundColor = '#0d6efd';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.color = '';
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
    </Artboard>
  );
};

export default About;