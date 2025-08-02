import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.image && <img src={project.image} alt={project.title} className="project-image" />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn live-btn">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;