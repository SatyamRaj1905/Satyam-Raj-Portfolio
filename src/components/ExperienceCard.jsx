import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export default function ExperienceCard({ item }) {
  return (
    <motion.article className="experience-card" whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
      <div className="experience-card__topline">
        <span className="retro-badge">{item.period}</span>
        <span className="retro-badge retro-badge--muted">{item.tag}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="experience-card__org">
        {item.organization} <span>· {item.location}</span>
      </p>
      <ul>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {item.report && (
        <a className="retro-link" href={item.report} target="_blank" rel="noreferrer">
          Detailed work report <FiExternalLink />
        </a>
      )}
    </motion.article>
  );
}
