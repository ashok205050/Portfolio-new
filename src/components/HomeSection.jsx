import "./HomeSection.css";

const HomeSection = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>I'm Ashok Maurya</h1>
        <h2 className="subtitle">MERN Full Stack Developer</h2>

        <p>
          I specialize in building high-performance, scalable, and intuitive
          full-stack web applications using MongoDB, Express.js, React, and
          Node.js. My passion lies in transforming complex ideas into seamless
          digital experiences.
        </p>

        <ul className="home-highlights">
          <li>
            ⚡ Crafting performance-driven web apps with React and Node.js
          </li>
          <li>📦 Building robust REST APIs and scalable backend systems</li>
          <li>🎯 Turning ideas into interactive, user-focused websites</li>
        </ul>

        <div className="home-buttons">
          <a href="#projects" className="btn-primary">
            View My Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;