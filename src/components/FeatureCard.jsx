// FeatureCard.jsx
// Card to display a single feature (icon, title, description)
// Props: icon (FontAwesome class), title (string), desc (string)
// Used in Home page to show Mealify features
import React from 'react';

const FeatureCard = ({ icon, title, desc }) => (
  <div className="feature-card p-4 h-100 bg-white rounded-4 shadow-sm text-center">
    <i className={`${icon} text-danger mb-3 fs-1`}></i>
    <h5 className="fw-bold mb-2">{title}</h5>
    <p className="text-secondary small mb-0">{desc}</p>
  </div>
);

export default FeatureCard; 