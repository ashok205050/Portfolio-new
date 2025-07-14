import React from 'react';
import './ProjectsSection.css'; // Create this CSS file for styling
import ProjectCard from './ProjectCard'; // We'll create this component next

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Store',
    description: 'A full-stack e-commerce platform featuring user authentication, product catalog, shopping cart, and order management.',
    technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://your-ecommerce-demo.com', // Replace with your live demo link
    githubLink: 'https://github.com/yourusername/ecommerce-repo', // Replace with your GitHub link
    image: 'path/to/ecommerce-screenshot.jpg' // Optional: screenshot of your project
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A CRUD application for managing daily tasks, including drag-and-drop functionality and user-specific task lists.',
    technologies: ['React', 'Context API', 'Node.js', 'Express.js', 'MongoDB'],
    liveLink: 'https://your-taskapp-demo.com',
    githubLink: 'https://github.com/yourusername/task-app-repo',
    image: 'path/to/taskapp-screenshot.jpg'
  },
  {
    id: 3,
    title: 'Social Media Clone',
    description: 'A simplified social media platform with features like post creation, liking, commenting, and user profiles.',
    technologies: ['React', 'Socket.IO', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    liveLink: 'https://your-socialapp-demo.com',
    githubLink: 'https://github.com/yourusername/social-app-repo',
    image: 'path/to/socialapp-screenshot.jpg'
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;