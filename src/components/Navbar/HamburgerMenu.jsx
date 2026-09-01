import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HamburgerMenu = ({ menuItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-5 right-5 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-lg border border-slate-800 text-white shadow-xl focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-56 p-2 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl flex flex-col gap-1"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 font-medium text-sm transition"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;