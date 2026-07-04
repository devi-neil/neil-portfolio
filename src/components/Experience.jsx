import React, { useState } from 'react';
import { Briefcase, GraduationCap, Code, Monitor, ChevronDown } from 'lucide-react';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const timelineData = [
    {
      id: 1,
      title: "Tech Support/Web Developer Intern",
      date: "Feb – Jun 2026",
      subtitle: "XISCO - Taguig City, Philippines",
      description: "Gained hands-on experience, providing technical support. Built a project based to the company. Fleet Monitoring and Reservation system, and Meeting Room Reservation System.",
      icon: <Briefcase size={18} />,
      color: "#06b6d4",
      bgColor: "rgba(6, 182, 212, 0.1)"
    },
    {
      id: 2,
      title: "AgriNet — Capstone Project",
      date: "2025 – 2026",
      subtitle: "Web-Based Project Management and GIS Mapping System",
      description: "A Web-Based Project Management and GIS Mapping System for Permanent Crop Monitoring at Quezon National Agricultural School (QNAS).",
      icon: <Monitor size={18} />,
      color: "#a855f7",
      bgColor: "rgba(168, 85, 247, 0.1)"
    },
    {
      id: 3,
      title: "BS Information Technology",
      date: "2022 – June 2026",
      subtitle: "CSTC — College of Sciences, Technology and Communication Inc.",
      description: "Completed my Bachelor of Science in Information Technology, focusing on programming, databases, networking, and system design.",
      icon: <GraduationCap size={18} />,
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)"
    },
    {
      id: 4,
      title: "Hello, World!",
      date: "2022",
      subtitle: "First Line of Code",
      description: "Started with programming fundamentals building first static sites and falling in love with turning ideas into interactive experiences.",
      icon: <Code size={18} />,
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)"
    }
  ];

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Experience & Education</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            From my first line of code to developing practical web applications.
          </p>
        </div>

        <div className="modern-timeline">
          {/* Vertical Line */}
          <div className="timeline-line"></div>

          {timelineData.map((item) => {
            const isExpanded = expandedItems[item.id];
            
            return (
              <div key={item.id} className="timeline-row">
                
                {/* Icon */}
                <div className="timeline-icon-wrapper" style={{ borderColor: item.color, color: item.color }}>
                  {item.icon}
                </div>

                {/* Card */}
                <div 
                  className={`timeline-content-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="timeline-card-header">
                    <div>
                      <h3 className="timeline-card-title">{item.title}</h3>
                      <p className="timeline-card-subtitle" style={{ color: item.color }}>{item.subtitle}</p>
                    </div>
                    
                    <div className="timeline-card-actions">
                      <span className="timeline-date-badge" style={{ color: item.color, backgroundColor: item.bgColor }}>
                        {item.date}
                      </span>
                      <div className={`timeline-chevron ${isExpanded ? 'rotated' : ''}`}>
                        <ChevronDown size={20} color="var(--text-secondary)" />
                      </div>
                    </div>
                  </div>

                  <div className="timeline-card-body">
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.75rem' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .modern-timeline {
          position: relative;
          padding: 1.5rem 0;
        }
        
        .timeline-line {
          position: absolute;
          left: 19px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, 
            rgba(6, 182, 212, 0.5), 
            rgba(168, 85, 247, 0.5), 
            rgba(59, 130, 246, 0.5), 
            rgba(245, 158, 11, 0.5));
          z-index: 1;
        }

        .timeline-row {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }

        .timeline-row:last-child {
          margin-bottom: 0;
        }

        .timeline-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--surface-color);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-right: 1rem;
          position: relative;
          z-index: 3;
        }
        
        body.game-mode .timeline-icon-wrapper {
          background: #18181b;
        }

        .timeline-content-card {
          flex-grow: 1;
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 0.75rem 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        body.game-mode .timeline-content-card {
          background: rgba(24, 24, 27, 0.6);
        }

        .timeline-content-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        body.game-mode .timeline-content-card:hover {
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.15);
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .timeline-card-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }

        .timeline-card-subtitle {
          font-size: 0.65rem;
          font-weight: 500;
        }

        .timeline-card-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .timeline-date-badge {
          padding: 0.15rem 0.5rem;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .timeline-chevron {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .timeline-chevron.rotated {
          transform: rotate(180deg);
        }

        .timeline-card-body {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .timeline-content-card.expanded .timeline-card-body {
          max-height: 300px;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 17px;
          }
          .timeline-icon-wrapper {
            width: 36px;
            height: 36px;
            margin-right: 1.25rem;
          }
          .timeline-card-header {
            flex-direction: column;
            gap: 1rem;
          }
          .timeline-card-actions {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
