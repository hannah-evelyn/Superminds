import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";

function Projects() {
  return (
    <div className="page projects-page">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;