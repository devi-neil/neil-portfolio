import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isGameMode, toggleGameMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Neil<span className="text-accent">.</span>
        </a>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          
          <button onClick={toggleGameMode} className="btn-icon" style={{ marginLeft: '1rem', border: '1px solid var(--border-color)', padding: '0.5rem', borderRadius: 'var(--radius-md)' }} aria-label="Toggle Theme">
            {isGameMode ? <Sun size={18} /> : <Gamepad2 size={18} />}
          </button>
          
          <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>Hire Me</a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
