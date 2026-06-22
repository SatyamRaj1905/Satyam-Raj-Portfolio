import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DesktopIcon from './components/DesktopIcon.jsx';
import Dock from './components/Dock.jsx';
import MobileAppGrid from './components/MobileAppGrid.jsx';
import RetroWindow from './components/RetroWindow.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import WindowContent from './components/WindowContent.jsx';
import { desktopApps } from './data/portfolio.js';
import { useTheme } from './hooks/useTheme.js';

const wallpaperSources = ['/avatar-light.png', '/avatar-dark.png'];

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    const finish = () => resolve(src);

    image.onload = finish;
    image.onerror = finish;
    image.src = src;

    if (image.complete) finish();
  });
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [wallpapersReady, setWallpapersReady] = useState(false);
  const [openWindows, setOpenWindows] = useState({});
  const [zMap, setZMap] = useState({});
  const [topZ, setTopZ] = useState(20);
  const [mobileActiveApp, setMobileActiveApp] = useState('');

  const appsById = useMemo(() => Object.fromEntries(desktopApps.map((app) => [app.id, app])), []);

  useEffect(() => {
    let isMounted = true;
    const minimumDisplay = new Promise((resolve) => setTimeout(resolve, 850));

    Promise.all([...wallpaperSources.map(preloadImage), minimumDisplay]).then(() => {
      if (isMounted) setWallpapersReady(true);
    });

    return () => {
      isMounted = false;
    };
  }, []);

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
    <main className="app-shell" aria-busy={!wallpapersReady}>
      <AnimatePresence>
        {!wallpapersReady && (
          <motion.div
            className="loading-screen"
            role="status"
            aria-live="polite"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
          >
            <motion.div
              className="loading-screen__panel"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.28 } }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            >
              <div className="loading-screen__avatar-wrap" aria-hidden="true">
                <img className="loading-screen__avatar" src="/favicon.png" alt="" />
              </div>
              <div className="loading-screen__copy">
                <span>Satyam Raj</span>
                <strong>Portfolio</strong>
              </div>
              <div className="loading-screen__bar" aria-hidden="true">
                <span />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
