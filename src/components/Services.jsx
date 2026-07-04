import React from 'react';
import { PenTool, Code, Server, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting beautiful, intuitive interfaces with a focus on user experience, modern aesthetics, and accessibility.",
      icon: <PenTool size={32} />
    },
    {
      title: "Frontend Development",
      description: "Building responsive, performant, and interactive web applications using modern frameworks like React.",
      icon: <Code size={32} />
    },
    {
      title: "System Development",
      description: "Developing robust full-stack systems, including management dashboards and reservation platforms.",
      icon: <Server size={32} />
    },
    {
      title: "IT Technical Support",
      description: "Providing hardware and software troubleshooting, system maintenance, and IT infrastructure support.",
      icon: <HeadphonesIcon size={32} />
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Delivering end-to-end solutions from design to technical support.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card service-card text-center">
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .service-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: var(--accent-light);
          color: var(--accent-primary);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all var(--transition-normal), border-radius var(--transition-theme);
        }
        body.game-mode .icon-wrapper {
          border: 1px solid rgba(0, 240, 255, 0.4);
        }
        .service-card:hover .icon-wrapper {
          background: var(--accent-primary);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }
        body.game-mode .service-card:hover .icon-wrapper {
          color: #000000;
        }
      `}</style>
    </section>
  );
};

export default Services;
