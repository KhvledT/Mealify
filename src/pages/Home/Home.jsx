// Home.jsx
// Main landing page for Mealify React
// Displays all main sections: Hero, Features, Stats, Healthy Choices, Testimonials, How It Works
// Each section uses reusable dynamic components
import './Home.css';
import React from 'react';
import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx';
import HealthCard from '../../components/HealthCard/HealthCard.jsx';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard.jsx';
import HowItCard from '../../components/HowItCard/HowItCard.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

// Features data (Font Awesome icons)
const features = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Fast Delivery',
    desc: 'Get your food delivered hot and fresh in record time.'
  },
  {
    icon: 'fa-solid fa-leaf',
    title: 'Healthy Ingredients',
    desc: 'We use only the freshest and healthiest ingredients.'
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Top Rated',
    desc: 'Our customers love us! 4.9/5 average rating.'
  },
];

// Stats data
const stats = [
  { value: '10K+', label: 'Orders Delivered' },
  { value: '50+', label: 'Dishes' },
  { value: '3', label: 'Master Chefs' },
];

// Home page component
const Home = () => {
  return (
    <>
      <div className="home-with-sidebar">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="home-content">
          {/* Hero Section */}
          <section className="hero-section bg-light py-5">
            <div className="container">
              <div className="row align-items-center flex-column-reverse flex-md-row">
                {/* Hero text */}
                <div className="col-12 col-md-6 text-md-start text-center mb-4 mb-md-0">
                  <h1 className="display-4 fw-bold mb-3 text-danger">Enjoy Your Healthy Delicious Food</h1>
                  <p className="lead mb-4 text-secondary">
                    We are a team of chefs who are passionate about cooking and delivering the best food to our customers.
                  </p>
                  <a href="/menu" className="btn btn-danger btn-lg px-4 shadow">Order Now</a>
                </div>
                {/* Hero image */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                  <img src={`${import.meta.env.BASE_URL}imgs/hero-img.png`} alt="Delicious Dish" className="hero-image mx-auto" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section with Font Awesome icons */}
          <section className="features-section py-5">
            <div className="container">
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8 text-center">
                  <h2 className="fw-bold mb-3 text-danger">Why Choose Mealify?</h2>
                  <p className="text-secondary">Discover what makes us the best choice for your next meal.</p>
                </div>
              </div>
              <div className="row justify-content-center g-4">
                {features.map((f, idx) => (
                  <div className="col-12 col-sm-6 col-md-4 text-center" key={idx}>
                    <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section py-5 bg-light">
            <div className="container">
              <div className="row justify-content-center g-4">
                {stats.map((s, idx) => (
                  <div className="col-6 col-md-4 text-center" key={idx}>
                    <div className="stat-card p-4 bg-white rounded-4 shadow-sm">
                      <span className="stat-value d-block fw-bold display-6 text-danger mb-1">{s.value}</span>
                      <span className="stat-label text-secondary small">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Healthy Choices Section */}
          <section className="healthy-section py-5">
            <div className="container">
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8 text-center">
                  <h2 className="fw-bold mb-3 text-success">Healthy Choices</h2>
                  <p className="text-secondary">We care about your health! Discover our wellness features and healthy menu options.</p>
                </div>
              </div>
              <div className="row justify-content-center g-4">
                {[
                  { icon: 'fa-seedling', title: 'Organic', desc: 'Fresh, organic ingredients in every dish.' },
                  { icon: 'fa-bread-slice', title: 'Gluten Free', desc: 'Plenty of gluten-free options for all.' },
                  { icon: 'fa-leaf', title: 'Vegan', desc: 'Tasty vegan and vegetarian meals.' },
                  { icon: 'fa-fire-flame-curved', title: 'Calories Info', desc: 'Clear calorie info for every meal.' },
                  { icon: 'fa-apple-whole', title: 'Quality', desc: 'Top quality, carefully selected ingredients.' },
                ].map((h, idx) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center" key={idx}>
                    <HealthCard icon={h.icon} title={h.title} desc={h.desc} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section py-5">
            <div className="container">
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8 text-center">
                  <h2 className="fw-bold mb-3 text-primary">What Our Customers Say</h2>
                  <p className="text-secondary">Real feedback from our happy customers.</p>
                </div>
              </div>
              <div className="row justify-content-center g-4">
                {[
                  {
                    img: 'https://randomuser.me/api/portraits/men/32.jpg',
                    name: 'John Smith',
                    rating: <><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star-half-stroke text-warning"></i></>,
                    text: '“The food is always fresh and delicious. Fast delivery and great service!”',
                  },
                  {
                    img: 'https://randomuser.me/api/portraits/women/44.jpg',
                    name: 'Emily Rose',
                    rating: <><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></>,
                    text: '“I love the healthy options and the vegan menu. Highly recommended!”',
                  },
                  {
                    img: 'https://randomuser.me/api/portraits/men/65.jpg',
                    name: 'Michael Lee',
                    rating: <><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-regular fa-star text-warning"></i></>,
                    text: '“Great variety and the chefs are amazing. Will order again!”',
                  },
                ].map((t, idx) => (
                  <div className="col-md-4 mb-4 mb-md-0" key={idx}>
                    <TestimonialCard img={t.img} name={t.name} rating={t.rating} text={t.text} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="howit-section py-5">
            <div className="container">
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8 text-center">
                  <h2 className="fw-bold mb-3 text-info">How It Works</h2>
                  <p className="text-secondary">Order your favorite meal in just a few simple steps.</p>
                </div>
              </div>
              <div className="row justify-content-center g-4">
                {[
                  { icon: 'fa-utensils', step: 1, title: 'Choose Your Meal', desc: 'Browse our menu and pick your favorite dishes.' },
                  { icon: 'fa-cart-shopping', step: 2, title: 'Place Your Order', desc: 'Add items to your cart and complete the checkout process.' },
                  { icon: 'fa-truck-fast', step: 3, title: 'Fast Delivery', desc: 'Sit back and relax while we deliver your meal quickly.' },
                ].map((h, idx) => (
                  <div className="col-12 col-md-4 text-center mb-4 mb-md-0" key={idx}>
                    <HowItCard icon={h.icon} step={h.step} title={h.title} desc={h.desc} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home; 