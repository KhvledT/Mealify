import React from 'react';

// ChefCard.jsx
// Card to display a single chef's data (name, image, specialty, experience, awards, quote, socials)
// Props: chef (object) contains all required data
// Used in Chefs page
const ChefCard = ({ chef }) => (
  <div
    className="card h-100 shadow-sm border-0 chef-card position-relative overflow-hidden"
    style={{height: '100%'}}
  >
    <img src={chef.img} className="card-img-top rounded-top" alt={chef.name} style={{ height: 260, objectFit: 'cover' }} loading="lazy" />
    <div className="card-body text-center">
      <h5 className="card-title fw-bold text-dark">{chef.name}</h5>
      <p className="text-danger mb-1">{chef.role}</p>
      <p className="card-text text-secondary small mb-2">{chef.desc}</p>
      <div className="mb-2">
        <span className="badge bg-danger-subtle text-danger me-2">{chef.specialty}</span>
        <span className="badge bg-secondary-subtle text-secondary">{chef.experience} experience</span>
      </div>
      <div className="mb-2 d-flex justify-content-center align-items-center gap-3">
        <span className="d-flex align-items-center gap-1 text-warning">
          <i className="fa-solid fa-trophy"></i> {chef.awards} Awards
        </span>
        <span className="d-flex align-items-center gap-1 text-success">
          <i className="fa-solid fa-utensils"></i> {chef.dish}
        </span>
      </div>
      <blockquote className="blockquote text-secondary small fst-italic mb-2">“{chef.quote}”</blockquote>
      <div className="d-flex justify-content-center gap-3 mt-2">
        {chef.socials.map((s, i) => (
          <a href={s.url} key={i} className="text-danger fs-5" target="_blank" rel="noopener noreferrer">
            <i className={s.icon}></i>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default ChefCard; 