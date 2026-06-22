import { motion } from 'framer-motion';
import { socials } from '../data/portfolio.js';
import { socialIconMap } from './iconMaps.jsx';

const dockMotion = {
  initial: { y: 0, scale: 1 },
  animate: { y: 0, scale: 1 },
  whileHover: { y: -10, scale: 1.08 },
  whileTap: { y: -2, scale: 0.94 },
  transition: { type: 'spring', stiffness: 520, damping: 32, mass: 0.55 }
};

export default function Dock() {
  const visibleSocials = socials.filter((item) => item.enabled && item.href);

  return (
    <nav className="dock" aria-label="Satyam Raj quick links">
      <div className="dock__inner">
        {visibleSocials.map((item) => {
          const Icon = socialIconMap[item.icon] || socialIconMap.external;
          const props = item.id === 'phone' || item.id === 'email' ? {} : { target: '_blank', rel: 'noreferrer' };
          return (
            <motion.a
              key={item.id}
              className={`dock__item dock__item--${item.id}`}
              href={item.href}
              aria-label={item.value}
              {...props}
              {...dockMotion}
            >
              <Icon />
              <span className="dock__tooltip">{item.label}</span>
            </motion.a>
          );
        })}
      </div>
    </nav>
  );
}
