import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      {/* Semicircle container now acts as the back-to-top button */}
      <div
        className="semicircle-container"
        onClick={scrollToTop}
        role="button" // Indicate that this div is interactive
        tabIndex="0"  // Make it focusable for keyboard navigation
        aria-label="Back to top" // Provide an accessible label
      >
        <i className="fas fa-chevron-up"></i> {/* Font Awesome chevron up icon */}
      </div>

      <div className="footer-inner">
        {/* Copyright on the left */}
        <div className="footer-left">
          <p>&copy; {currentYear} Ashok Maurya</p>
        </div>

        {/* Social links on the right */}
        <div className="footer-right">
          <ul className="social-links">
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i> {/* Font Awesome GitHub icon */}
            </a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i> {/* Font Awesome LinkedIn icon */}
            </a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i> {/* Font Awesome Twitter icon */}
            </a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
