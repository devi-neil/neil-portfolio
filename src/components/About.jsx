import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Hello! I'm <strong className="text-accent">Neil Jefferson A. Devilles</strong> — an aspiring UI/UX Designer, Frontend Web Developer, and IT Technical Support specialist passionate about building clean, user-friendly, and modern web systems.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              I have experience creating management systems, reservation systems, and monitoring platforms using modern technologies and user-centered design principles. My goal is to bridge the gap between aesthetic design and robust technical implementation, delivering solutions that are not only beautiful but highly functional.
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <a href="#contact" className="btn btn-primary">Let's Connect</a>
              <a href="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); alert('CV Download placeholder'); }}>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
