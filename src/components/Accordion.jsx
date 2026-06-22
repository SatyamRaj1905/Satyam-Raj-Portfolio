import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function Accordion({ items, defaultOpenId }) {
  const [openId, setOpenId] = useState(defaultOpenId || items?.[0]?.id);

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div className="accordion__item" key={item.id}>
            <button
              type="button"
              className="accordion__trigger"
              onClick={() => setOpenId(isOpen ? '' : item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <FiChevronDown />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="accordion__panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeInOut' }}
                >
                  <div className="accordion__panel-inner">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
