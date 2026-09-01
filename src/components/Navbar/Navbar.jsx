import { motion, AnimatePresence } from "framer-motion";
import HamburgerMenu from './HamburgerMenu';
import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [showDesktopNav, setShowDesktopNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShowDesktopNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowDesktopNav(false); // scrolling down
      } else {
        setShowDesktopNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <AnimatePresence>
        {showDesktopNav && (
          <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-5 inset-x-0 mx-auto w-[90%] max-w-5xl z-50 hidden lg:flex items-center justify-between px-6 py-3 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-purple-950/20"
          >
            <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-center gap-1 group">
              <span className="text-purple-400 group-hover:-translate-x-0.5 transition-transform">&lt;</span>
              <span>Atharva</span>
              <span className="text-purple-400">/</span>
              <span className="text-slate-400 font-normal">Dev</span>
              <span className="text-purple-400 group-hover:translate-x-0.5 transition-transform">&gt;</span>
            </a>

            <nav className="flex items-center gap-1 font-medium text-sm text-slate-300">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-150"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile / Tablet Menu */}
      <HamburgerMenu menuItems={navLinks} />
    </>
  );
};

export default Navbar;