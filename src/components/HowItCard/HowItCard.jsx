import React from 'react';

const HowItCard = ({ icon, step, title, desc, color = 'info' }) => (
  <div className="howit-card p-4 h-100 bg-white rounded-4 shadow-sm text-center">
    <i className={`fa-solid ${icon} text-${color} mb-3 fs-1`}></i>
    <h6 className="fw-bold mb-2">{step}. {title}</h6>
    <p className="text-secondary small mb-0">{desc}</p>
  </div>
);

export default HowItCard; 