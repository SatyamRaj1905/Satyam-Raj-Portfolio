import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import DesktopIcon from './components/DesktopIcon.jsx';
import Dock from './components/Dock.jsx';
import MobileAppGrid from './components/MobileAppGrid.jsx';
import RetroWindow from './components/RetroWindow.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import WindowContent from './components/WindowContent.jsx';
import { desktopApps } from './data/portfolio.js';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [openWindows, setOpenWindows] = useState({});
  const [zMap, setZMap] = useState({});
  const [topZ, setTopZ] = useState(20);
  const [mobileActiveApp, setMobileActiveApp] = useState('');

  const appsById = useMemo(() => Object.fromEntries(desktopApps.map((app) => [app.id, app])), []);

  const focusWindow = (id) => {
    setTopZ((current) => {
      const next = current + 1;
      setZMap((map) => ({ ...map, [id]: next }));
      return next;
    });
  };

  const openWindow = (id) => {
    setOpenWindows((current) => ({ ...current, [id]: true }));
    focusWindow(id);
  };

  const closeWindow = (id) => {
    setOpenWindows((current) => ({ ...current, [id]: false }));
  };

  return (
    <main className="app-shell">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <section className="desktop-shell" aria-label="Retro desktop portfolio interface">
        <div className="desktop-icons" aria-label="Desktop shortcuts">
          {desktopApps.map((app) => (
            <DesktopIcon app={app} onOpen={openWindow} key={app.id} />
          ))}
        </div>

        <AnimatePresence>
          {Object.entries(openWindows)
            .filter(([, isOpen]) => isOpen)
            .map(([id]) => (
              <RetroWindow
                key={id}
                config={appsById[id]}
                zIndex={zMap[id] || 25}
                onFocus={() => focusWindow(id)}
                onClose={() => closeWindow(id)}
              >
                <WindowContent id={id} openWindow={openWindow} />
              </RetroWindow>
          ))}
        </AnimatePresence>

        <Dock />
      </section>

      <MobileAppGrid apps={desktopApps} activeApp={mobileActiveApp} setActiveApp={setMobileActiveApp} openWindow={openWindow} />
      <div className="mobile-dock-wrap">
        <Dock />
      </div>
    </main>
  );
}
