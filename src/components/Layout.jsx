import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

// Main layout component to wrap all pages
const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1 flex-lg-row flex-column flex-wrap row mx-auto container-fluid" style={{ minHeight: '70vh' }}>
        <div className="col-lg">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout; 