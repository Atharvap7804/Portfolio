import React, { useState, useEffect } from 'react';

const HamburgerMenu = ({ menuItems }) => {
  const [open, setOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowIcon(true); // scrolling up
      } else {
        setShowIcon(false); // scrolling down
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="md:hidden fixed top-4 right-4 z-50">
      {/* Always show hamburger icon, keep it fixed */}
      <button
        className="p-2 rounded bg-gray-800 text-white focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded shadow-lg flex flex-col py-2 animate-fade-in">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-white hover:bg-gray-700 text-lg border-b border-gray-800 last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
