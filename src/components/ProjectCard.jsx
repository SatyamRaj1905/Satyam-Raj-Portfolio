import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <motion.article className="project-card" whileHover={{ y: -4, rotate: -0.2 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
      <div className="project-card__header">
        <h3>{project.title}</h3>
        <div className="project-card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
              <FiGithub />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <ul>
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.article>
  );
}
