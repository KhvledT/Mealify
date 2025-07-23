import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

// Main layout component to wrap all pages
const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1 flex-lg-row flex-column flex-wrap" style={{ minHeight: '70vh' }}>
        <Sidebar />
        <main className="flex-grow-1 p-3" style={{ overflowX: 'hidden' }}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout; 