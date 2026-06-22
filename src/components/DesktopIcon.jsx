import { motion } from 'framer-motion';
import { appIconMap } from './iconMaps.jsx';

export default function DesktopIcon({ app, onOpen, compact = false }) {
  const Icon = appIconMap[app.icon] || appIconMap.folder;
  const className = `desktop-icon ${compact ? 'desktop-icon--compact' : ''}`;

  return (
    <motion.button
      type="button"
      className={className}
      onDoubleClick={() => onOpen(app.id)}
      onClick={() => onOpen(app.id)}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Open ${app.title}`}
    >
      {app.type === 'shortcut' ? (
        <span className="desktop-icon__shortcut" aria-hidden="true">
          <span>sr</span>
        </span>
      ) : (
        <span className="desktop-icon__folder" aria-hidden="true">
          <Icon />
        </span>
      )}
      <span className="desktop-icon__label">{app.label}</span>
    </motion.button>
  );
}
