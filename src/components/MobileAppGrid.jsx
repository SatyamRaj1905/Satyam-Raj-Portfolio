import { AnimatePresence, motion } from 'framer-motion';
import DesktopIcon from './DesktopIcon.jsx';
import RetroWindow from './RetroWindow.jsx';
import WindowContent from './WindowContent.jsx';
import { profile } from '../data/portfolio.js';

export default function MobileAppGrid({ apps, activeApp, setActiveApp, openWindow }) {
  return (
    <div className="mobile-shell">
      <div className="mobile-hero">
        <span className="mobile-hero__eyebrow">C:\SATYAM\mobile</span>
        <h1>{profile.name}</h1>
        <p>{profile.role} · {profile.location}</p>
      </div>

      <div className="mobile-app-grid">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.035 }}
          >
            <DesktopIcon app={app} onOpen={setActiveApp} compact />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeApp && (
          <div className="mobile-window-layer">
            <RetroWindow
              mobile
              config={apps.find((app) => app.id === activeApp)}
              zIndex={100}
              onClose={() => setActiveApp('')}
              onFocus={() => {}}
            >
              <WindowContent id={activeApp} openWindow={(id) => setActiveApp(id)} />
            </RetroWindow>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
