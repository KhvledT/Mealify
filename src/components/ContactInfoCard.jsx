import React from 'react';

const ContactInfoCard = ({ icon, title, text }) => (
  <div className="card border-0 shadow-sm h-100 text-center contact-info-card">
    <div className="card-body">
      <i className={`fa-solid ${icon} fa-2x text-danger mb-2`}></i>
      <h6 className="fw-bold">{title}</h6>
      <p className="text-secondary small mb-0">{text}</p>
    </div>
  </div>
);

export default ContactInfoCard; 