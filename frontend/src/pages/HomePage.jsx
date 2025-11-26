import React, { useEffect } from 'react';
import { SignInButton } from '@clerk/clerk-react';
import '../landing.css';
import heroImage from '/hero.png';

// Placeholder icons - ideally, these would be more sophisticated SVGs
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 12" />
    </svg>
);

const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l.75-1.5 7.5-4.5 7.5 4.5.75 1.5M4.5 12.75v3.75m15-3.75v3.75" />
    </svg>
);

const CollabIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.228a4.5 4.5 0 00-1.897-3.728A9.094 9.094 0 0012 5.25v2.818" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a4.5 4.5 0 014.5 4.5v2.25m-8.99-1.5a4.5 4.5 0 00-1.897-3.728m-.75-4.5A9.094 9.094 0 006 5.25v2.818" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25a4.5 4.5 0 014.5 4.5v2.25m0 0a4.5 4.5 0 01-4.5 4.5M12 5.25v7.5" />
    </svg>
);

const CtaArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="16" height="16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
)

// Particle background component
const ParticleBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.particles-container');
    if (!container) return;

    // Function to create particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random animation duration between 10s and 20s
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(particle);

      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, 15000);
    };

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      createParticle();
    }

    // Create new particles periodically
    const interval = setInterval(createParticle, 800);

    return () => clearInterval(interval);
  }, []);

  return <div className="particles-container" />;
};

const HomePage = () => {
  return (
    <div className="landing-page-theme">
      <ParticleBackground />
      <main>
        {/* --- HERO SECTION --- */}
        <section className="hero-section container">
          <h1 className="hero-title">
            Code Together, <span className="highlight">Learn Together</span>
          </h1>
          <p className="hero-subtitle">
            The ultimate platform for real-time collaborative coding interviews and peer-to-peer learning.
          </p>
          <div className="cta-container">
            <SignInButton mode="modal">
              <button className="cta-button cta-primary">
                Start Coding Now <CtaArrowIcon />
              </button>
            </SignInButton>
            <a href="#features" className="cta-button cta-secondary">
              Explore Features
            </a>
          </div>
          <div className="hero-image-container glowing-border">
            <img src={heroImage} alt="Collaborative coding session" className="hero-image" />
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section id="features" className="features-section container">
          <div className="features-grid">
            <div className="feature-card">
              <VideoIcon />
              <h3 className="feature-title">HD Video Call</h3>
              <p className="feature-description">
                Crystal-clear, low-latency video calls to communicate effectively with your peers or candidates.
              </p>
            </div>
            <div className="feature-card">
              <CodeIcon />
              <h3 className="feature-title">Live Code Editor</h3>
              <p className="feature-description">
                A shared, real-time code editor with support for multiple languages and syntax highlighting.
              </p>
            </div>
            <div className="feature-card">
              <CollabIcon />
              <h3 className="feature-title">Easy Collaboration</h3>
              <p className="feature-description">
                Seamlessly create and share coding sessions. Review past sessions to track progress and learning.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;