import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
    </motion.a>
  );
}

export default ProjectCard;
