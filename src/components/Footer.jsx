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
      <div
        className="semicircle-container"
        onClick={scrollToTop}
        role="button"
        tabIndex="0"
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </div>

      <div className="footer-inner">
        <div className="footer-left">
          <p>&copy; {currentYear} Ashok Maurya</p>
        </div>

        <div className="footer-right">
          <div className="footer-contact">
            <a href="mailto:ashokmaurya2050@gmail.com" aria-label="Email Ashok Maurya">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <ul className="social-links">
            <li><a href="https://github.com/ashok205050" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a></li>
            <li><a href="https://www.linkedin.com/in/ashok-maurya2050/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a></li>
            {/* <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;