import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "edddb800-4527-484a-97c5-cc157817fcad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        console.error("Error", data);
        setStatus(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("An error occurred. Please try again later.");
    }
    
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Interested in working together? Let's connect and discuss your next project.
        </p>

        <div className="contact-grid">
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ height: 'auto' }}>
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Email</h4>
                  <a href="mailto:devillesneiljefferson@gmail.com" style={{ color: 'var(--text-secondary)' }}>
                    devillesneiljefferson@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="card" style={{ height: 'auto' }}>
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Phone</h4>
                  <a href="tel:09515389520" style={{ color: 'var(--text-secondary)' }}>
                    0951 538 9520
                  </a>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/devi-neil" target="_blank" rel="noopener noreferrer" className="card social-card" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/neil-devilles" target="_blank" rel="noopener noreferrer" className="card social-card" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="card">
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="your.email@example.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-control" placeholder="How can I help you?" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === "Sending..."}>
                  {status === "Sending..." ? "Sending..." : "Send Message"} <Send size={18} />
                </button>
                
                {status && (
                  <p style={{ marginTop: '1rem', textAlign: 'center', color: status.includes('success') ? 'var(--accent-primary)' : 'red', fontWeight: '500' }}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .info-icon {
          width: 50px;
          height: 50px;
          background: var(--accent-light);
          color: var(--accent-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-theme);
        }
        .social-card {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          color: var(--text-primary);
        }
        .social-card:hover {
          color: var(--accent-primary);
        }

        /* Game Mode Overrides */
        body.game-mode .info-icon {
          border: 1px solid rgba(0, 240, 255, 0.4);
          background: rgba(0, 240, 255, 0.1);
        }
        body.game-mode .form-control {
          background: rgba(0, 240, 255, 0.05);
          border-color: rgba(0, 240, 255, 0.2);
          color: var(--text-primary);
        }
        body.game-mode .form-control:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2), inset 0 0 5px rgba(0, 240, 255, 0.1);
          background: rgba(24, 24, 27, 0.9);
        }


        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
