import React from 'react';
import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { isGameMode } = useTheme();

  return (
    <footer style={{ backgroundColor: 'var(--surface-color)', padding: '3rem 0', borderTop: '1px solid var(--border-color)', transition: 'var(--transition-theme)' }}>
      <div className="container">
        <div className="footer-content">
          
          <div className="logo" style={{ fontSize: '1.25rem' }}>
            Neil<span className="text-accent">.</span>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/devi-neil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/neil-devilles" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>

        </div>
        
        <div className="text-center mt-8 text-muted" style={{ fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Neil Jefferson A. Devilles. All rights reserved.
        </div>
      </div>

      <style>{`
        .footer-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
          }
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-color);
          color: var(--text-secondary);
          transition: all var(--transition-fast), border-radius var(--transition-theme);
          border: 1px solid var(--border-color);
        }
        .social-icon:hover {
          background: var(--accent-primary);
          color: white;
          transform: translateY(-3px);
          border-color: var(--accent-primary);
          box-shadow: var(--shadow-md);
        }

        /* Game Mode Overrides */
        body.game-mode footer {
          border-top: 1px solid rgba(0, 240, 255, 0.3) !important;
          background: rgba(0, 240, 255, 0.05) !important;
        }
        body.game-mode footer .text-muted {
          color: var(--accent-primary) !important;
        }
        body.game-mode footer .social-icon {
          border-color: rgba(0, 240, 255, 0.5);
        }
        body.game-mode footer .social-icon:hover {
          color: #000;
          box-shadow: var(--shadow-glow);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
