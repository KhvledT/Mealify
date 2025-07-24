// Navbar.jsx
// Main navigation bar component for Mealify React App
// Displays site logo, main navigation links, and order button
// No props, relies on React Router for navigation
// Contains logic to close the menu on mobile navigation
import './Navbar.css';
import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '/imgs/favicon.png';

const Navbar = () => {
  const location = useLocation();
  const navbarCollapseRef = useRef(null);
  const togglerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return saved === 'true';
      // fallback to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Close navbar collapse on link click
  const handleNavLinkClick = () => {
    // تحقق إذا كان زر التبديل ظاهر (أي في الشاشات الصغيرة)
    const togglerVisible = togglerRef.current && togglerRef.current.offsetParent !== null;
    if (togglerVisible) {
      setIsOpen(false);
      if (navbarCollapseRef.current && window.bootstrap) {
        const collapse = window.bootstrap.Collapse.getOrCreateInstance(navbarCollapseRef.current);
        collapse.hide();
      }
    }
  };

  // Toggle navbar collapse on toggler click (Bootstrap)
  const handleTogglerClick = () => {
    setIsOpen((prev) => !prev);
    if (navbarCollapseRef.current && window.bootstrap) {
      const collapse = window.bootstrap.Collapse.getOrCreateInstance(navbarCollapseRef.current);
      collapse.toggle();
    }
  };

  // Close navbar collapse when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const collapseEl = navbarCollapseRef.current;
      const togglerEl = togglerRef.current;
      if (!collapseEl) return;
      const isMenuOpen = collapseEl.classList.contains('show');
      if (!isMenuOpen) return;
      if (
        collapseEl.contains(e.target) ||
        (togglerEl && togglerEl.contains(e.target))
      ) {
        return;
      }
      if (window.bootstrap) {
        const collapse = window.bootstrap.Collapse.getOrCreateInstance(collapseEl);
        collapse.hide();
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, []);

  // أضف مراقبة لإغلاق القائمة عند انتهاء الأنيميشن (Bootstrap collapse):
  useEffect(() => {
    const collapseEl = navbarCollapseRef.current;
    if (!collapseEl) return;
    const handleHide = () => setIsOpen(false);
    collapseEl.addEventListener('hidden.bs.collapse', handleHide);
    return () => collapseEl.removeEventListener('hidden.bs.collapse', handleHide);
  }, []);

  // Remove navOpen/collapse event sync

  // Force collapse to be closed on mount (remove 'show' class if present)
  useEffect(() => {
    if (navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove('show');
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top py-2 nav-blur">
      <div className="container p-1 rounded">
        {/* Logo and brand */}
        <NavLink className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-3 nav-logo" to="/">
          <img src={logo} alt="Mealify Logo" width={48} height={48} style={{ borderRadius: '50%', boxShadow: '0 2px 8px 0 rgba(206,18,18,0.10)' }} loading="lazy" />
          Mealify.
        </NavLink>
        <button
          ref={togglerRef}
          className={`navbar-toggler custom-toggler${isOpen ? ' toggled' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleTogglerClick}
        >
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 nav-links">
            <li className="nav-item">
              <NavLink end className={({ isActive }) => `nav-link${isActive ? ' active fw-bold text-danger' : ''}`} to="/" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active fw-bold text-danger' : ''}`} to="/chefs" onClick={handleNavLinkClick}>Chefs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active fw-bold text-danger' : ''}`} to="/gallery" onClick={handleNavLinkClick}>Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active fw-bold text-danger' : ''}`} to="/menu" onClick={handleNavLinkClick}>Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active fw-bold text-danger' : ''}`} to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
            </li>
          </ul>
          {/* Dark mode toggle button with Font Awesome icon */}
          <button
            className="btn btn-outline-dark ms-lg-3 nav-dark-btn"
            title="Toggle dark mode"
            onClick={() => setDarkMode(d => !d)}
          >
            {darkMode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 