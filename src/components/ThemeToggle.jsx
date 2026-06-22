import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className="theme-toggle__icon">{isDark ? <FiMoon /> : <FiSun />}</span>
      <span className="theme-toggle__text">{isDark ? 'dark' : 'light'}</span>
    </motion.button>
  );
}
