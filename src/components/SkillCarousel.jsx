import React from 'react';

const SkillCarousel = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-track">
        {/* Original Set */}
        <div className="skill-pill">
          <img src="/html-icon.png" alt="HTML" /> HTML
          <span className="pill-badge">Experienced</span>
        </div>
        <div className="skill-pill">
          <img src="/css-icon.png" alt="CSS" /> CSS
          <span className="pill-badge">Intermediate</span>
        </div>
        <div className="skill-pill">
          <img src="/js-icon.png" alt="JavaScript" /> JavaScript
          <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill react-pill">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-svg">
            <circle cx="12" cy="11.999" r="2.136" fill="#61DAFB" />
            <path d="M12 7.5c4.136 0 7.5 1.567 7.5 3.5S16.136 14.5 12 14.5 4.5 12.933 4.5 11s3.364-3.5 7.5-3.5z" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
            <path d="M9.134 9.25C11.202 5.67 13.798 3.5 15.5 4.464c1.702.964 1.202 4.4-.866 7.98-2.068 3.58-4.664 5.75-6.366 4.786C6.566 16.266 7.066 12.83 9.134 9.25z" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
            <path d="M14.866 9.25c2.068 3.58 2.568 7.016.866 7.98C14.03 18.194 11.434 16.024 9.366 12.444 7.298 8.864 6.798 5.428 8.5 4.464c1.702-.964 4.298 1.206 6.366 4.786z" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
          </svg>
          React <span className="pill-badge">Intermediate</span>
        </div>
        <div className="skill-pill">
          <img src="/php-icon.png" alt="PHP" /> PHP
          <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill">
          <img src="/figma-icon.png" alt="Figma" /> Figma
          <span className="pill-badge">Intermediate</span>
        </div>
        <div className="skill-pill">
          <img src="/mysql-icon.png" alt="MySQL" /> MySQL
          <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill">
          <img src="/git-icon.png" alt="Git" /> Git
          <span className="pill-badge">Intermediate</span>
        </div>
        <div className="skill-pill firebase-pill">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="skill-svg">
            <path d="M5.87 23.4l.45-.27 7.5-13.01.01-.01L11.67 6.3a.76.76 0 00-1.37.13L5.87 23.4z" fill="#FFA000" />
            <path d="M5.87 23.4l.19-.11 7.77-14.08.01-.01-1.39-2.79a.76.76 0 00-1.37.13L5.87 23.4z" fill="#F57F17" />
            <path d="M16.15 12.74l2.42-2.42-2.42-4.6a.79.79 0 00-1.4 0l-1.44 2.75.01.01 2.83 4.26z" fill="#FFA000" />
            <path d="M16.15 12.74l2.42-2.42-2.42-4.6a.79.79 0 00-.7-.42v7.09l.7.35z" fill="#F57F17" />
            <path d="M5.87 23.4l.06-.03.68-.4 9.54-9.54.62-.89L13.84 9.9 5.87 23.4z" fill="#FFCA28" />
            <path d="M16.15 12.74l7.98 4.61-2.71-9.45a.77.77 0 00-1.41-.07l-3.86 4.91z" fill="#FFA000" />
            <path d="M5.87 23.4l18.26-6.05-7.98-4.61-10.28 10.66z" fill="#FFCA28" />
            <path d="M16.15 22.5l7.98-5.15-18.26 6.05 10.28-.9z" fill="#F57F17" />
          </svg>
          Firebase <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill">
          <img src="/canva-icon.png" alt="Canva" /> Canva
          <span className="pill-badge">Intermediate</span>
        </div>

        {/* Duplicate Set for seamless loop */}
        <div className="skill-pill">
          <img src="/html-icon.png" alt="HTML" /> HTML
          <span className="pill-badge">Experienced</span>
        </div>
        <div className="skill-pill">
          <img src="/css-icon.png" alt="CSS" /> CSS
          <span className="pill-badge">Intermediate</span>
        </div>
        <div className="skill-pill">
          <img src="/js-icon.png" alt="JavaScript" /> JavaScript
          <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill react-pill">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-svg">
            <circle cx="12" cy="11.999" r="2.136" fill="#61DAFB" />
            <path d="M12 7.5c4.136 0 7.5 1.567 7.5 3.5S16.136 14.5 12 14.5 4.5 12.933 4.5 11s3.364-3.5 7.5-3.5z" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
            <path d="M9.134 9.25C11.202 5.67 13.798 3.5 15.5 4.464c1.702.964 1.202 4.4-.866 7.98-2.068 3.58-4.664 5.75-6.366 4.786C6.566 16.266 7.066 12.83 9.134 9.25z" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
            <path d="M14.866 9.25c2.068 3.58 2.568 7.016.866 7.98C14.03 18.194 11.434 16.024 9.366 12.444 7.298 8.864 6.798 5.428 8.5 4.464c1.702-.964 4.298 1.206 6.366 4.786z" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
          </svg>
          React <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill">
          <img src="/php-icon.png" alt="PHP" /> PHP
          <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill">
          <img src="/figma-icon.png" alt="Figma" /> Figma
          <span className="pill-badge">Intermediate</span>
        </div>
        <div className="skill-pill">
          <img src="/mysql-icon.png" alt="MySQL" /> MySQL
          <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill">
          <img src="/git-icon.png" alt="Git" /> Git
          <span className="pill-badge">Intermediate</span>
        </div>
        <div className="skill-pill firebase-pill">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="skill-svg">
            <path d="M5.87 23.4l.45-.27 7.5-13.01.01-.01L11.67 6.3a.76.76 0 00-1.37.13L5.87 23.4z" fill="#FFA000" />
            <path d="M5.87 23.4l.19-.11 7.77-14.08.01-.01-1.39-2.79a.76.76 0 00-1.37.13L5.87 23.4z" fill="#F57F17" />
            <path d="M16.15 12.74l2.42-2.42-2.42-4.6a.79.79 0 00-1.4 0l-1.44 2.75.01.01 2.83 4.26z" fill="#FFA000" />
            <path d="M16.15 12.74l2.42-2.42-2.42-4.6a.79.79 0 00-.7-.42v7.09l.7.35z" fill="#F57F17" />
            <path d="M5.87 23.4l.06-.03.68-.4 9.54-9.54.62-.89L13.84 9.9 5.87 23.4z" fill="#FFCA28" />
            <path d="M16.15 12.74l7.98 4.61-2.71-9.45a.77.77 0 00-1.41-.07l-3.86 4.91z" fill="#FFA000" />
            <path d="M5.87 23.4l18.26-6.05-7.98-4.61-10.28 10.66z" fill="#FFCA28" />
            <path d="M16.15 22.5l7.98-5.15-18.26 6.05 10.28-.9z" fill="#F57F17" />
          </svg>
          Firebase <span className="pill-badge">Basic</span>
        </div>
        <div className="skill-pill">
          <img src="/canva-icon.png" alt="Canva" /> Canva
          <span className="pill-badge">Intermediate</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCarousel;
