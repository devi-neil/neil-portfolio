import React from 'react';
import SkillCarousel from './SkillCarousel';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life.
        </p>
        
        <div>
          <SkillCarousel />
        </div>
      </div>
    </section>
  );
};

export default Skills;
