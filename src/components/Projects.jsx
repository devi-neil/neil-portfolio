import React, { useState } from 'react';
import { ExternalLink, Code, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [
    {
      title: "AgriNet",
      description: "A Web-Based Project Management and GIS Mapping System for Permanent Crop Monitoring at Quezon National Agricultural School (QNAS). Streamlines crop monitoring, project management, and GIS-based visualization for agricultural operations.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Figma"],
      image: "/agrinet.png",
      images: ["/agrinet.png"],
      link: "#"
    },
    {
      title: "Room Booking System",
      description: "A modern room reservation and booking system designed for office and meeting room management with real-time functionality and clean UI.",
      techStack: ["React", "Lucide React", "Firebase", "Node.js", "npm"],
      image: "/room-reservation/room-login-page.png",
      images: [
        "/room-reservation/room-login-page.png",
        "/room-reservation/dashboard-overall-view.png",
        "/room-reservation/dashboard-daily-list.png",
        "/room-reservation/dashboard-daily-timeline.png",
        "/room-reservation/room-map.png",
        "/room-reservation/user-reservation.png"
      ],
      link: "https://meeting-room-reservation-demo.web.app/",
      demoLink: "https://meeting-room-reservation-demo.web.app/"
    },
    {
      title: "Fleet Monitoring and Reservation System",
      description: "A fleet management and monitoring platform designed to track vehicles, reservations, and operational activities with modern dashboard interfaces.",
      techStack: ["React v18.2", "FastAPI", "SQLite", "PostgreSQL", "Firebase"],
      image: "/fleet-project/fleet-overview.png",
      images: [
        "/fleet-project/fleet-overview.png",
        "/fleet-project/admin-approval.png",
        "/fleet-project/audit.png",
        "/fleet-project/completed-trip-log.png",
        "/fleet-project/dashboard.png",
        "/fleet-project/fleet-managevehicle.png",
        "/fleet-project/login-page.png",
        "/fleet-project/user-request-schedule.png",
        "/fleet-project/user-reservations.png"
      ],
      link: "#"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing some of my best system development and design work.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card" onClick={() => openModal(project)}>
              {project.image && (
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1rem', 
                  lineHeight: '1.5', 
                  fontSize: '0.85rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.description}
                </p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-demo" aria-label="Live Demo" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={16} style={{ marginRight: '0.5rem' }} /> Live Demo
                  </a>
                )}
                {!project.demoLink && (
                  <a href={project.link} className="btn-icon" aria-label="View Project" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                  </a>
                )}
                <a href="#" className="btn-icon" aria-label="View Source" onClick={(e) => e.stopPropagation()}>
                  <Code size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>
              <X size={20} />
            </button>
            
            <div className="project-modal-slideshow">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
                className="project-modal-image" 
              />
              
              <div className="project-modal-image-caption">
                {selectedProject.images[currentImageIndex].split('/').pop().split('.')[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </div>
              
              {selectedProject.images.length > 1 && (
                <>
                  <button className="slideshow-nav slideshow-prev" onClick={prevImage}>
                    <ChevronLeft size={24} />
                  </button>
                  <button className="slideshow-nav slideshow-next" onClick={nextImage}>
                    <ChevronRight size={24} />
                  </button>
                  <div className="slideshow-indicators">
                    {selectedProject.images.map((_, i) => (
                      <div 
                        key={i} 
                        className={`indicator ${i === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(i)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="project-modal-info">
              <h3 className="project-modal-title">{selectedProject.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {selectedProject.description}
              </p>
              <div className="tech-stack" style={{ marginBottom: '0' }}>
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-actions" style={{ borderTop: 'none', padding: '0', marginTop: '2rem' }}>
                {selectedProject.demoLink && (
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="btn-demo" aria-label="Live Demo">
                    <ExternalLink size={16} style={{ marginRight: '0.5rem' }} /> Live Demo
                  </a>
                )}
                {!selectedProject.demoLink && (
                  <a href={selectedProject.link} className="btn-icon" aria-label="View Project">
                    <ExternalLink size={20} />
                  </a>
                )}
                <a href="#" className="btn-icon" aria-label="View Source">
                  <Code size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          padding: 0;
          cursor: pointer;
          transition: var(--transition-theme), transform var(--transition-normal);
        }
        .project-image-wrapper {
          width: 100%;
          height: 140px;
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        .project-content {
          padding: 1.25rem 1.25rem 0 1.25rem;
          flex-grow: 1;
        }
        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--accent-primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--transition-normal);
          z-index: 2;
        }
        .project-card:hover::before {
          transform: scaleX(1);
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .tech-badge {
          font-size: 0.7rem;
          padding: 0.2rem 0.6rem;
          background: var(--bg-color);
          color: var(--text-secondary);
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-color);
          font-weight: 500;
          transition: var(--transition-theme);
        }
        .project-actions {
          display: flex;
          gap: 1rem;
          border-top: 1px solid var(--border-color);
          padding: 1rem 1.25rem 1.25rem 1.25rem;
          margin-top: 1rem;
          transition: var(--transition-theme);
        }
        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-color);
          color: var(--text-primary);
          transition: all var(--transition-fast);
          border: 1px solid transparent;
        }
        .btn-icon:hover {
          background: var(--accent-primary);
          color: white;
          transform: translateY(-2px);
        }
        .btn-demo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
          height: 40px;
          border-radius: var(--radius-pill);
          background: var(--accent-primary);
          color: white;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
          text-decoration: none;
        }
        .btn-demo:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Game Mode Overrides for Projects (Mission Cards) */
        body.game-mode .project-card {
          border: 1px solid rgba(0, 240, 255, 0.3);
          background: rgba(24, 24, 27, 0.8);
        }
        body.game-mode .project-card:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.2), inset 0 0 10px rgba(0, 240, 255, 0.1);
        }

        body.game-mode .project-image-wrapper::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 240, 255, 0.1),
            rgba(0, 240, 255, 0.1) 1px,
            transparent 1px,
            transparent 2px
          );
          z-index: 1;
          pointer-events: none;
          opacity: 0.5;
        }
        body.game-mode .project-card:hover .project-image-wrapper::before {
          opacity: 0.2;
        }
        body.game-mode .project-title {
          color: var(--accent-primary);
          text-shadow: 2px 2px 0 rgba(0, 240, 255, 0.3);
        }
        body.game-mode .tech-badge {
          border-color: rgba(0, 240, 255, 0.3);
          background: rgba(0, 240, 255, 0.05);
          color: var(--accent-primary);
        }
        body.game-mode .btn-icon {
          border-color: rgba(0, 240, 255, 0.5);
          color: var(--accent-primary);
          background: transparent;
        }
        body.game-mode .btn-icon:hover {
          background: var(--accent-primary);
          color: #000;
          box-shadow: var(--shadow-glow);
        }
        body.game-mode .btn-demo {
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
        }
        body.game-mode .btn-demo:hover {
          background: var(--accent-primary);
          color: #000;
          box-shadow: var(--shadow-glow);
        }

        /* Modal Styles */
        .project-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(5px);
        }
        .project-modal-content {
          background: var(--surface-color);
          border-radius: var(--radius-lg);
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid var(--border-color);
        }
        .project-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background var(--transition-fast);
        }
        .project-modal-close:hover {
          background: rgba(0,0,0,0.8);
        }
        .project-modal-slideshow {
          position: relative;
          width: 100%;
          background: #050505;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .project-modal-slideshow {
            height: 500px;
          }
        }
        .project-modal-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .project-modal-image-caption {
          position: absolute;
          bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.9);
          background: rgba(0, 0, 0, 0.6);
          padding: 0.4rem 1.2rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          pointer-events: none;
          z-index: 5;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .slideshow-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .slideshow-nav:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        .slideshow-prev { left: 1rem; }
        .slideshow-next { right: 1rem; }
        .slideshow-indicators {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
        }
        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
        }
        .indicator.active {
          background: white;
          transform: scale(1.2);
        }
        .project-modal-info {
          padding: 2rem;
        }
        .project-modal-title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        body.game-mode .project-modal-content {
          background: rgba(24, 24, 27, 0.95);
          border: 1px solid var(--accent-primary);
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
        }
        body.game-mode .project-modal-title {
          color: var(--accent-primary);
          text-shadow: 2px 2px 0 rgba(0, 240, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Projects;
