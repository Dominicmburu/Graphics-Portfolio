import React from 'react';
import Artboard from '../components/Artboard';

const About = () => {
  const skills = [
    'Brandwatch',
    'Content Strategy',
    'Canvas Editing',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Social Media',
    'Copywriting & SEO',
    'Google Analytics',
    'Content Marketing'
  ];

  const socialLinks = [
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/stephen-mburu-gathima-4a943737a', color: '#0A66C2' },
    { icon: 'bi-instagram', url: 'https://www.instagram.com/stephengathima/', color: '#E4405F' },
    { icon: 'bi-tiktok', url: 'https://www.tiktok.com/@stephen_gathima?_r=1&_t=ZM-91hQLpIhceS', color: '#000000' },
    { icon: 'bi-facebook', url: 'https://www.facebook.com/stephenson.sonitek/', color: '#1877F2' },
    { icon: 'bi-github', url: 'https://github.com/stevegathi', color: '#181717' },
    { icon: 'bi-x', url: 'https://x.com/wagathi_?t=n9VRENNr5PcIxHfceAIB3g&s=09', color: '#000000' }
  ];

  const experiences = [
    {
      title: 'Regional Content Marketing Manager',
      company: 'Sage',
      period: '2023 - Present',
      description: 'Managing strategy, planning, implementation, and measurement of Sage content for Africa and the Middle East. Responsible for integrating end-to-end content and brand marketing strategy, ensuring success of all marketing programs from both demand and brand perspectives.'
    },
    {
      title: 'Digital and Social Media Strategist',
      company: 'Creacha',
      period: '2022 - 2024',
      description: 'Developed integrated communication strategies and content for WesBank Group and InspectaCar, aligning brand messaging and digital presence to support business goals and customer engagement.'
    },
    {
      title: 'Social Media Manager and Content Writer',
      company: 'Maxco',
      period: '2020 - 2022',
      description: 'Produced high-quality content for digital platforms including websites, blogs, and promotional materials. Developed and implemented social media strategies to enhance brand visibility across Facebook, Twitter, Instagram, and LinkedIn.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor in Information Technology',
      institution: 'Dedan Kimathi School of Technology',
      period: '2020 - 2023',
      description: 'Focused on developing technical skills in computer systems, programming, and information management. Gained proficiency in software development, database management, and network administration.'
    },
    {
      degree: 'Bachelor of Communication and Critical Thinking',
      institution: 'Dedan Kimathi School of Technology',
      period: '2016 - 2020',
      description: 'Developed strong communication skills in verbal and written forms, with emphasis on critical and analytical thinking. Learned to effectively convey ideas, conduct research, and analyze complex problems.'
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/pdf/stephen gathima updted cv resume.pdf';
    link.download = 'Stephen_Gathima_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Artboard title="About Me">
      <div className="row g-4">
        {/* Profile Section */}
        <div className="col-md-4 text-center mb-4">
          <div 
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center bg-gradient shadow-lg"
            style={{ 
              width: '200px', 
              height: '200px',
              background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
              animation: 'pulse 3s ease-in-out infinite'
            }}
          >
            <img 
              src="images/steve.jpg" 
              alt="Stephen Gathima"
              className="rounded-circle border border-white"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
          </div>
          
          <h3 className="mt-4 text-dark fw-bold">Stephen Gathima</h3>
          <p className="text-muted fs-6">Digital Content Marketing Manager</p>
          <p className="text-muted small mb-2">
            <i className="bi bi-geo-alt-fill me-1"></i>
            Nairobi, Kenya
          </p>
          <p className="text-muted small mb-2">
            <i className="bi bi-envelope-fill me-1"></i>
            gathimasteve.@gmail.com
          </p>
          <p className="text-muted small">
            <i className="bi bi-telephone-fill me-1"></i>
            +254-79-900-3963
          </p>
          
          <button 
            className="btn btn-primary mt-3 mb-3 w-100"
            onClick={handleDownloadCV}
            style={{
              background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
              border: 'none',
              padding: '10px 20px',
              fontWeight: 'bold'
            }}
          >
            <i className="bi bi-download me-2"></i>
            Download CV
          </button>
          
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
        </div>
        
        {/* Main Content */}
        <div className="col-md-8">
          <h4 className="text-dark fw-bold mb-3">
            <i className="bi bi-person-fill text-primary me-2"></i>
            Professional Summary
          </h4>
          
          <p className="text-muted lh-lg mb-4">
            A data-driven customer experience champion with over 3 years of digital marketing 
            experience, specializing in social media and content strategy. Over the last two years, 
            I have successfully led teams in creating and managing content across various platforms, 
            currently serving as Regional Content Marketing Manager for Sage in South Africa and the 
            Middle East, where I lead strategic projects. I excel at translating ideas into user-friendly 
            interfaces that enhance the overall experience, with strong graphic editing skills in Canvas, 
            Adobe Illustrator, and Adobe Photoshop.
          </p>
          
          {/* Experience Section */}
          <h5 className="text-dark fw-bold mb-3 mt-4">
            <i className="bi bi-briefcase-fill text-primary me-2"></i>
            Experience
          </h5>
          
          {experiences.map((exp, index) => (
            <div key={index} className="card mb-3 border-0 shadow-sm">
              <div className="card-body">
                <h6 className="fw-bold text-dark">{exp.title}</h6>
                <p className="text-primary mb-1">{exp.company}</p>
                <p className="text-muted small mb-2">
                  <i className="bi bi-calendar3 me-1"></i>
                  {exp.period}
                </p>
                <p className="text-muted small mb-0">{exp.description}</p>
              </div>
            </div>
          ))}
          
          {/* Education Section */}
          <h5 className="text-dark fw-bold mb-3 mt-4">
            <i className="bi bi-mortarboard-fill text-primary me-2"></i>
            Education
          </h5>
          
          {education.map((edu, index) => (
            <div key={index} className="card mb-3 border-0 shadow-sm">
              <div className="card-body">
                <h6 className="fw-bold text-dark">{edu.degree}</h6>
                <p className="text-primary mb-1">{edu.institution}</p>
                <p className="text-muted small mb-2">
                  <i className="bi bi-calendar3 me-1"></i>
                  {edu.period}
                </p>
                <p className="text-muted small mb-0">{edu.description}</p>
              </div>
            </div>
          ))}
          
          {/* Skills Section */}
          <h5 className="text-dark fw-bold mb-3 mt-4">
            <i className="bi bi-tools text-primary me-2"></i>
            Skills & Tools
          </h5>
          
          <div className="d-flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="badge bg-light text-dark px-3 py-2 border"
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
              </span>
            ))}
          </div>

          {/* References Section */}
          <h5 className="text-dark fw-bold mb-3 mt-4">
            <i className="bi bi-people-fill text-primary me-2"></i>
            References
          </h5>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="fw-bold text-dark">Stephen Suyiankar</h6>
                  <p className="text-muted small mb-1">Digital Webframe Co's</p>
                  <p className="text-muted small mb-0">
                    <i className="bi bi-telephone me-1"></i>+254717830455
                  </p>
                  <p className="text-muted small mb-0">
                    <i className="bi bi-envelope me-1"></i>stephkans@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="fw-bold text-dark">Dr. Patric Gikunda</h6>
                  <p className="text-muted small mb-1">Dedan Kimathi School of Science</p>
                  <p className="text-muted small mb-0">
                    <i className="bi bi-telephone me-1"></i>+254724381702
                  </p>
                  <p className="text-muted small mb-0">
                    <i className="bi bi-envelope me-1"></i>patrick.gikunda@dkut.ac.ke
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Artboard>
  );
};

export default About;