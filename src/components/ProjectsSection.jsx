import React, { useState, useRef, useEffect } from "react";
import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "W A L L I",
    description:
      "A full-stack platform for downloading high-quality and creative wallpapers for various devices, with a focus on a curated collection of artistic designs from a global community of artists.",
    technologies: [
      "Next.js",
      "React",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "Radix UI",
      "Django",
      "PostgreSQL",
      "DjangoRestFramework",
      "Cloudinary",
    ],
    liveLink: "https://walli-one.vercel.app",
    // githubLink: "https://github.com/yourusername/walli-one",
    image: "/images/Walli.png",
  },
  {
    id: 2,
    title: "Questionary",
    description:
      "A full-stack website for downloading previous year question papers for all exams in India. The platform features robust user authentication, a comprehensive search system, and efficient document management.",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Prisma",
      "NextAuth.js",
      "Bcrypt.js",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn",
    ],
    liveLink: "https://questionary-xi.vercel.app",
    // githubLink: "https://github.com/yourusername/task-app-repo",
    image: "/images/Questionary.png",
  },
  {
    id: 3,
    title: "Route Optimizer",
    description:
      "A route optimization application for delivery services. It utilizes the Google Maps API to efficiently calculate and visualize the most optimal delivery routes, saving time and resources. The user-friendly interface is built with React and styled with Tailwind CSS.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Google Maps API",
      "Tailwind CSS",
      "Axios",
      "Radix UI",
    ],

    liveLink: "https://routeopt.vercel.app",
    // githubLink: "https://github.com/yourusername/social-app-repo",
    image: "/images/Route.png",
  },
  {
    id: 4,
    title: "Platformer Game (Only for Desktop)",
    
description: 'A classic 2D platformer game inspired by Super Mario. The game engine, physics, and rendering were all custom-built from scratch using fundamental web technologies, without the use of an external game framework or library.',
technologies: ['Vanilla JavaScript', 'HTML', 'CSS'],
    liveLink: "https://parkourjs.netlify.app",
    // githubLink: "https://github.com/yourusername/movie-app-repo",
    image: "/images/Parkour.png",
  },
  // {
  //   id: 5,
  //   title: "Recipe Finder",
  //   description:
  //     "A web app that allows users to find recipes based on ingredients and dietary restrictions.",
  //   technologies: ["React", "Redux", "API", "Tailwind CSS"],
  //   liveLink: "https://your-recipe-demo.com",
  //   // githubLink: "https://github.com/yourusername/recipe-app-repo",
  //   image: "path/to/recipeapp-screenshot.jpg",
  // },
];

const projectsPerPage = 3;

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsSectionRef = useRef(null);

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`page-btn ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="projects-section"
      ref={projectsSectionRef}
    >
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {renderPagination()}
      </div>
    </section>
  );
};

export default ProjectsSection;
