import './Footer.css';
import React from 'react';

// Main footer component
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src={`${import.meta.env.BASE_URL}imgs/favicon.png`} alt="Mealify Logo" width={36} height={36} style={{ borderRadius: '50%' }} loading="lazy" />
              <span className="fw-bold fs-5">Mealify</span>
            </div>
            <p className="small text-secondary mb-0">Mealify is a restaurant landing page that offers a delicious dining experience to its customers.</p>
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <h6 className="fw-bold mb-2">Follow Us</h6>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light fs-5"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="text-light fs-5"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-light fs-5"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-bold mb-2">Get in Touch</h6>
            <ul className="list-unstyled small mb-0">
              <li><i className="fa-solid fa-location-dot me-2"></i> A108 Adam Street, New York, NY 535022</li>
              <li><i className="fa-solid fa-envelope me-2"></i> contact@example.com</li>
              <li><i className="fa-solid fa-phone me-2"></i> +1 5589 55488 55</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center small text-secondary">
          &copy; {new Date().getFullYear()} Mealify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 