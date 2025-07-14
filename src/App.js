import React, { useEffect, useState } from 'react'; 
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home'); 

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
          setActiveSection(hash.substring(1));
        }
      } else {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          setActiveSection('home'); 
        }, 0);
      }
    };

    const observerOptions = {
      root: null, 
      rootMargin: `-${NAVBAR_HEIGHT}px 0px -50% 0px`, 
      threshold: 0, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const rect = entry.target.getBoundingClientRect();
          if (rect.top >= NAVBAR_HEIGHT && rect.top <= window.innerHeight - (window.innerHeight * 0.3) ) {
            setActiveSection(entry.target.id);
          } else if (rect.top < NAVBAR_HEIGHT && rect.bottom > NAVBAR_HEIGHT) {
             setActiveSection(entry.target.id);
          }
        }
      });
    }, observerOptions);

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
  }, []); 

  return (
    <div>
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