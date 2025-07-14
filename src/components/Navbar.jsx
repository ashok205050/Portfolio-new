import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (sectionId) => activeSection === sectionId;

  // --- CHANGE THIS LINE ---
  // Reference the image directly from the public folder
  const profileImageUrl = "/Ashok.jpg"; // <-- Use the correct filename if different

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          {!imgLoaded && (
            <div
              className="profile-placeholder"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
              }}
            />
          )}
          <img
            src={profileImageUrl} // Use the local path
            alt="Profile"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              objectFit: "cover",
              opacity: imgLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              position: !imgLoaded ? "absolute" : "static",
              visibility: !imgLoaded ? "hidden" : "visible",
            }}
            onLoad={() => setImgLoaded(true)}
            onError={(e) => {
              console.error("Profile image failed to load:", e);
              setImgLoaded(true);
            }}
          />
        </div>

        <div className="navbar-right">
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a
                href="#home"
                className={isActive("home") ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li className="menu-divider"></li>
            <li>
              <a
                href="#about"
                className={isActive("about") ? "active" : ""}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li className="menu-divider"></li>
            <li>
              <a
                href="#projects"
                className={isActive("projects") ? "active" : ""}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className="menu-divider"></li>
            <li>
              <a
                href="#contact"
                className={isActive("contact") ? "active" : ""}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;