import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const variants = {
  hidden: { opacity: 0, scale: 0.86, y: 18, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 260, damping: 24 }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 16,
    filter: 'blur(4px)',
    transition: { duration: 0.18 }
  }
};

function windowStyle(config, zIndex) {
  const width = config.window?.width || 560;
  return {
    zIndex,
    width,
    '--window-width': typeof width === 'number' ? `${width}px` : width
  };
}

export default function RetroWindow({ config, children, zIndex, onFocus, onClose, mobile = false }) {
  const title = config?.title || 'Window';
  const path = config?.path || `C:\\SATYAM\\${title.toLowerCase()}`;

  return (
    <motion.section
      className={`retro-window ${mobile ? 'retro-window--mobile' : 'retro-window--desktop'}`}
      style={mobile ? undefined : windowStyle(config, zIndex)}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      drag={!mobile}
      dragMomentum={false}
      dragElastic={0.04}
      dragTransition={{ bounceStiffness: 360, bounceDamping: 28 }}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={`${title} window`}
    >
      <div className="retro-window__titlebar">
        <div className="retro-window__path">
          <span className="retro-window__terminal-dot" aria-hidden="true" />
          {path}
        </div>
        <button className="retro-window__close" type="button" onClick={onClose} aria-label={`Close ${title}`}>
          <FiX />
        </button>
      </div>
      <div className="retro-window__body">{children}</div>
    </motion.section>
  );
}
