import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm Ashok Maurya, a passionate MERN Stack Developer dedicated to building dynamic, user-friendly web applications. I specialize in developing robust front-end interfaces using React.js and integrating them seamlessly with powerful back-end solutions built on Node.js, Express.js, and MongoDB.
        </p>
        <p>
          My journey into web development began with a deep curiosity about how technology can solve real-world problems and create seamless digital experiences. I'm committed to continuous learning and constantly explore new technologies and best practices to build high-quality, scalable solutions.
        </p>

        <div className="skills-wrapper">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5</li>
                <li>CSS3 (Flexbox, Grid)</li>
                <li>Redux / Context API</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Django</li>
                <li>RESTful APIs</li>
                <li>WebSockets</li>
                <li>JWT Authentication</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Databases</h4>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Tools & Platforms</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Firebase</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
