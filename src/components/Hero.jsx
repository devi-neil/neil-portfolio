import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const ROLES = ["UI/UX Designer", "Frontend Developer", "IT Tech Support"];

const Hero = () => {
  const { isGameMode } = useTheme();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setCurrentText(
          currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container">
        <div className="hero-content fade-in-up">

          <div className="hero-text">
            <div className={`system-status text-accent fade-in-up ${isGameMode ? 'visible' : 'hidden'}`} style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '2px', marginBottom: '1rem', transition: 'opacity 0.5s ease', opacity: isGameMode ? 1 : 0, height: isGameMode ? 'auto' : 0 }}>
              &gt; PLAYER PROFILE INITIALIZED_
            </div>
            <h1 className="hero-title">
              Designing modern digital experiences with creativity and functionality.
            </h1>

            <p className="hero-subtitle text-muted">
              Aspiring <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>{currentText}</span>
              <span className="cursor">|</span>
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ position: 'relative' }}>
            {isGameMode && (
              <div className="particles-container">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="particle" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`
                  }}></div>
                ))}
              </div>
            )}
            <div className={`hero-image ${isGameMode ? 'holo-border' : ''}`}>
              <img
                src="/myprofile.jpg"
                alt="Neil Jefferson A. Devilles"
                style={{ opacity: isGameMode ? 0 : 1 }}
              />
              <img
                src="/my profile-sunglass.png"
                alt="Neil Jefferson A. Devilles - Game Mode"
                className="game-mode-img"
                style={{ opacity: isGameMode ? 1 : 0 }}
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-content {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          gap: 4rem;
        }
        .hero-text {
          text-align: center;
          flex: 1;
        }
        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          color: var(--text-primary);
        }
        .hero-subtitle {
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          min-height: 1.5rem;
        }
        .cursor {
          display: inline-block;
          font-weight: 400;
          color: var(--accent-primary);
          animation: blink 1s step-end infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .hero-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
          border: 4px solid var(--surface-color);
          flex-shrink: 0;
          transition: var(--transition-theme);
          position: relative;
          z-index: 2;
        }
        
        /* Game Mode Specific Styles */
        body.game-mode .hero-image.holo-border {
          border-color: var(--accent-primary);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.6), inset 0 0 10px rgba(0, 240, 255, 0.4);
        }
        
        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease-in-out;
          position: absolute;
          top: 0;
          left: 0;
        }
        .game-mode-img {
          z-index: 2;
        }

        .particles-container {
          position: absolute;
          top: -20%; left: -20%; right: -20%; bottom: -20%;
          pointer-events: none;
          z-index: 1;
        }
        .particle {
          position: absolute;
          width: 3px; height: 3px;
          background: var(--accent-primary);
          box-shadow: 0 0 5px var(--accent-primary);
          opacity: 0;
          animation: float-up infinite ease-in;
        }
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-80px); opacity: 0; }
        }

        @media (min-width: 992px) {
          .hero-content {
            flex-direction: row;
            justify-content: space-between;
          }
          .hero-text {
            text-align: left;
            padding-right: 2rem;
          }
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
          }
          .hero-actions {
            justify-content: flex-start;
          }
          .hero-image {
            width: 380px;
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
