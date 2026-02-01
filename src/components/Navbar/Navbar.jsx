import { motion } from "framer-motion";
import HamburgerMenu from './HamburgerMenu';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {

  const [showDesktopNav, setShowDesktopNav] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const navVisible = useRef(true);

  useEffect(() => {
    const threshold = 4; // px before toggling
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const diff = window.scrollY - lastScrollY.current;
        if (diff < -threshold && !navVisible.current) {
          setShowDesktopNav(true);
          navVisible.current = true;
        } else if (diff > threshold && navVisible.current) {
          setShowDesktopNav(false);
          navVisible.current = false;
        }
        lastScrollY.current = window.scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: showDesktopNav ? 0 : -100, opacity: showDesktopNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden md:flex fixed top-0 left-0 w-full justify-between items-center px-15 py-5 h-[15vh] bg-[#171C29] z-50 shadow-lg"
        style={{ pointerEvents: showDesktopNav ? 'auto' : 'none' }}
      >
        <div className="logo text-2xl text-gray-300">
          <a href="#home">
            <span className="text-violet-500">&lt;</span>
            Atharva
            <span className="text-violet-500">/</span>
            <span className="text-gray-300">Dev</span>
            <span className="text-violet-500">&gt;</span>
          </a>
        </div>

        <div className="flex gap-10 font-semibold text-white text-xl">
          {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-violet-500 px-2 py-1 rounded-md transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* ================= HAMBURGER MENU FOR MOBILE/TABLET ================= */}
      <HamburgerMenu
        menuItems={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Experience', href: '#experience' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' },
        ]}
      />
    </>
  );
};

export default Navbar;
