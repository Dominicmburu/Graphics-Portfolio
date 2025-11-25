import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    
    try {
      const response = await fetch('https://formspree.io/f/xqaowqpn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        setError(true);
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: 'bi-envelope-fill', 
      title: 'Email', 
      value: 'gathimasteve@gmail.com',
      link: 'mailto:gathimasteve@gmail.com'
    },
    { 
      icon: 'bi-telephone-fill', 
      title: 'Phone', 
      value: '+254799003963',
      link: 'tel:+254799003963'
    },
    { 
      icon: 'bi-geo-alt-fill', 
      title: 'Location', 
      value: 'Nairobi,  kenya',
      link: 'https://maps.google.com/?q=Nairobi'
    }
  ];

  return (
    <div className="mx-auto" style={{ maxWidth: '800px' }}>
      <div className="text-center mb-5">
        <div style={{ animation: 'float 3s ease-in-out infinite' }}>
          <i className="bi bi-chat-dots-fill text-primary" style={{ fontSize: '60px' }}></i>
        </div>
        <h2 className="text-white mb-3 fw-bold display-5 mt-4">Let's Work Together</h2>
        <p className="fs-5 text-secondary">
          Have a project in mind? I'd love to hear from you. Send me a message and let's create something amazing.
        </p>
      </div>

      <Card bg="dark" text="white" className="border-secondary shadow-lg mb-4">
        <Card.Body className="p-4">
          {submitted && (
            <Alert variant="success" className="mb-4">
              <i className="bi bi-check-circle-fill me-2"></i>
              Thank you! Your message has been sent successfully.
            </Alert>
          )}

          {error && (
            <Alert variant="danger" className="mb-4">
              <i className="bi bi-exclamation-circle-fill me-2"></i>
              Failed to send message. Please try again or email directly.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">
                <i className="bi bi-person me-2"></i>
                Your Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="bg-dark text-white border-secondary"
                size="lg"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">
                <i className="bi bi-envelope me-2"></i>
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="bg-dark text-white border-secondary"
                size="lg"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">
                <i className="bi bi-tag me-2"></i>
                Subject
              </Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
                className="bg-dark text-white border-secondary"
                size="lg"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-medium">
                <i className="bi bi-chat-text me-2"></i>
                Message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="bg-dark text-white border-secondary"
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              size="lg" 
              className="w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Sending...
                </>
              ) : (
                <>
                  <i className="bi bi-send-fill me-2"></i>
                  Send Message
                </>
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Row className="text-center g-4">
        {contactInfo.map((info, index) => (
          <Col key={index} md={4} className="mb-4">
            <a 
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{ 
                display: 'block',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="bg-dark border border-secondary rounded p-4 h-100"
                style={{ transition: 'all 0.3s' }}
              >
                <i className={`bi ${info.icon} text-primary`} style={{ fontSize: '32px' }}></i>
                <h6 className="text-white mt-3 mb-2 fw-semibold">{info.title}</h6>
                <p className="text-secondary small mb-0">{info.value}</p>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Contact;