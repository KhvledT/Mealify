import React from 'react';

const TestimonialCard = ({ img, name, rating, text }) => (
  <div className="testimonial-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
    <img src={img} alt="Customer" className="testimonial-img mb-3" loading="lazy" />
    <h6 className="fw-bold mb-1">{name}</h6>
    <div className="mb-2">{rating}</div>
    <p className="text-secondary small mb-0">{text}</p>
  </div>
);

export default TestimonialCard; 