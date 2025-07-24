import React, { useState } from 'react';
import './Gallery.css';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedDishCard from '../../components/FeaturedDishCard/FeaturedDishCard.jsx';
import GalleryCard from '../../components/GalleryCard/GalleryCard.jsx';

// Gallery images data (high quality)
const galleryImages = [
  { src: `${import.meta.env.BASE_URL}imgs/meal-1.jpg`, category: 'Pizza', title: 'Pizza', desc: 'Hawaiian pizza with ham and pineapple', price: '$12', calories: 350 },
  { src: `${import.meta.env.BASE_URL}imgs/meal-2.jpg`, category: 'Beef', title: 'Beef Steaks', desc: 'Tasty beef steaks flying above cast iron grate with fire flames.', price: '$18', calories: 520 },
  { src: `${import.meta.env.BASE_URL}imgs/meal-3.jpg`, category: 'Burger', title: 'Burger', desc: 'Grass fed bison hamburger with chips & beer', price: '$10', calories: 600 },
  { src: `${import.meta.env.BASE_URL}imgs/meal-4.jpg`, category: 'Pizza', title: 'Levitation Pizza', desc: 'Levitation pizza on black background.', price: '$14', calories: 400 },
  { src: `${import.meta.env.BASE_URL}imgs/meal-5.jpg`, category: 'Chicken', title: 'Crispy Fried Chicken', desc: 'Golden brown chicken legs with a crunchy coating and juicy meat', price: '$13', calories: 480 },
  { src: `${import.meta.env.BASE_URL}imgs/meal-6.jpg`, category: 'Kebab', title: 'Lyulya Kebab', desc: 'Tender and juicy skewers of ground lamb or beef, flavored with aromatic spices and herbs', price: '$15', calories: 420 },
  { src: `${import.meta.env.BASE_URL}imgs/meal-7.jpg`, category: 'Frittata', title: 'Frittata', desc: 'Frittata or potato pie in a ceramic plate', price: '$9', calories: 300 },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', category: 'Pizza', title: 'Modern Pizza', desc: 'Trendy pizza from the web', price: '$16', calories: 370 },
  { src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', category: 'Chicken', title: 'Grilled Chicken', desc: 'Perfectly grilled chicken breast', price: '$11', calories: 260 },
];

const featuredDishes = [
  { src: `${import.meta.env.BASE_URL}imgs/meal-2.jpg`, title: 'Signature Beef Steaks', desc: 'Our chef’s favorite, grilled to perfection.', price: '$22', calories: 540 },
  { src: `${import.meta.env.BASE_URL}imgs/meal-4.jpg`, title: 'Levitation Pizza Deluxe', desc: 'A modern twist on a classic pizza.', price: '$19', calories: 410 },
  { src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', title: 'Grilled Chicken Special', desc: 'Juicy chicken breast with herbs.', price: '$15', calories: 320 },
];

const categories = [
  { name: 'All', icon: 'fa-solid fa-border-all' },
  { name: 'Pizza', icon: 'fa-solid fa-pizza-slice' },
  { name: 'Beef', icon: 'fa-solid fa-drumstick-bite' },
  { name: 'Burger', icon: 'fa-solid fa-burger' },
  { name: 'Chicken', icon: 'fa-solid fa-drumstick-bite' },
  { name: 'Kebab', icon: 'fa-solid fa-hotdog' },
  { name: 'Frittata', icon: 'fa-solid fa-egg' },
];

// Animation variants for framer-motion
const gridVariants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const imgVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', bounce: 0.18 } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.3 } },
};

// Gallery page component
const Gallery = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? galleryImages : galleryImages.filter(img => img.category === active);

  return (
    <section className="bg-light py-5">
      <div className="container my-5">
        <h2 className="mb-2 text-danger fw-bold text-center">Gallery</h2>
        <p className="text-center text-secondary mb-4">Discover our delicious menu! Browse a selection of our best dishes, all prepared with fresh ingredients and a touch of creativity.</p>
        
        {/* Featured Dishes Section */}
        <div className="featured-dishes-section mt-5 mb-5 p-4 rounded-4 shadow-sm bg-featured">
          <h3 className="fw-bold text-danger mb-4 text-center">Featured Dishes</h3>
          <div className="row justify-content-center g-4">
            {featuredDishes.map((dish, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={dish.title + idx}>
                <FeaturedDishCard dish={dish} />
              </div>
            ))}
          </div>
        </div>
        <hr className="my-5" />

        {/* Tabs for categories with icons */}
        <ul className="nav nav-tabs justify-content-center mb-4 gallery-tabs mt-5">
          {categories.map(cat => (
            <li className="nav-item" key={cat.name}>
              <button
                className={`nav-link${active === cat.name ? ' active text-danger fw-bold' : ''}`}
                onClick={() => setActive(cat.name)}
              >
                <i className={`${cat.icon} me-2`}></i>{cat.name}
              </button>
            </li>
          ))}
        </ul>
        {/* Food images grid with overlay and animation */}
        <motion.div
          className="row g-4"
          variants={gridVariants}
          initial="visible"
          animate="visible"
          key={active}
        >
          <AnimatePresence mode="wait">
            {filtered.map((img, idx) => (
              <motion.div
                className="col-12 col-sm-6 col-md-4 col-lg-4"
                key={img.src + idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.35, type: 'spring', bounce: 0.18 }}
              >
                <GalleryCard img={img} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Gallery; 