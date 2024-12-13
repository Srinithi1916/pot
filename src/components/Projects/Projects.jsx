import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Project Home",
      description: "A comprehensive home management system",
      link: "https://projecthome.onrender.com/",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Presentation React Project",
      description: "Interactive presentation platform",
      link: "https://presentationreactproject.onrender.com/",
      technologies: ["React", "Express", "Socket.io"]
    },
    // Add more projects here
  ]

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
              View Project
            </a>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects