import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      data-mode={isDark ? 'dark' : 'light'}
      onClick={onToggle}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__option theme-toggle__option--light">
          <FiSun />
        </span>
        <span className="theme-toggle__option theme-toggle__option--dark">
          <FiMoon />
        </span>
        <span className="theme-toggle__thumb">{isDark ? <FiMoon /> : <FiSun />}</span>
      </span>
      <span className="theme-toggle__text">{isDark ? 'dark' : 'light'}</span>
    </motion.button>
  );
}
