function ProjectCard({ project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card">
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
    </a>
  );
}

export default ProjectCard;
