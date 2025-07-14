import React, { useEffect, useState } from 'react'; // Import useState
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // State to hold the active section ID

  useEffect(() => {
    const NAVBAR_HEIGHT = 80;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScrollToHash = () => {
      const { hash } = window.location;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementTop - NAVBAR_HEIGHT;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          // Update active section when navigating via hash
          setActiveSection(hash.substring(1));
        }
      } else {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          setActiveSection('home'); // Set home as active if no hash
        }, 0);
      }
    };

    // Intersection Observer for active link highlighting
    const observerOptions = {
      root: null, // viewport
      rootMargin: `-${NAVBAR_HEIGHT}px 0px -50% 0px`, // Adjust sensitivity, consider navbar height
      threshold: 0, // When any part of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Check if the section is truly in the "active" view area
          const rect = entry.target.getBoundingClientRect();
          if (rect.top >= NAVBAR_HEIGHT && rect.top <= window.innerHeight - (window.innerHeight * 0.3) ) {
             // This condition tries to ensure it's the primary section in view,
             // not just barely intersecting. Adjust as needed.
            setActiveSection(entry.target.id);
          } else if (rect.top < NAVBAR_HEIGHT && rect.bottom > NAVBAR_HEIGHT) {
             // If the top is behind the navbar but the bottom is still in view
             setActiveSection(entry.target.id);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('hashchange', handleScrollToHash);
    setTimeout(() => {
      handleScrollToHash();
    }, 0);

    return () => {
      window.removeEventListener('hashchange', handleScrollToHash);
      document.querySelectorAll('section[id]').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  return (
    <div>
      {/* Pass activeSection to Navbar */}
      <Navbar activeSection={activeSection} />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;