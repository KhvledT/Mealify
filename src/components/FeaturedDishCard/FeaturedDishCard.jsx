import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedDishCard = ({ dish }) => {
  const navigate = useNavigate();
  return (
    <div
      className="featured-card p-4 bg-white rounded-4 shadow-sm h-100 text-center position-relative"
      style={{height: '100%'}}
    >
      <span className="badge bg-danger position-absolute top-0 start-50 translate-middle-x mt-2">Featured</span>
      <div className="featured-img-wrapper mb-3">
        <img src={dish.src} alt={dish.title} className="featured-img rounded-3" loading="lazy" />
      </div>
      <h5 className="fw-bold mb-2">{dish.title}</h5>
      <p className="text-secondary small mb-2">{dish.desc}</p>
      <div className="mb-2 d-flex justify-content-center gap-3">
        <span className="badge bg-danger-subtle text-danger"><i className="fa-solid fa-dollar-sign me-1"></i>{dish.price}</span>
        <span className="badge bg-secondary-subtle text-secondary"><i className="fa-solid fa-fire me-1"></i>{dish.calories} kcal</span>
      </div>
      <button className="btn btn-danger btn-lg rounded-pill px-4 featured-order-btn mt-2" title="Order Now" onClick={() => navigate('/order', { state: { meal: dish } })}>
        <i className="fa-solid fa-cart-plus me-1"></i> Order Now
      </button>
    </div>
  );
};

export default FeaturedDishCard; 