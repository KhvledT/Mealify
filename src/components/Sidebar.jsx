import './Sidebar.css';
import React from 'react';

// Sidebar.jsx
// Sidebar component for displaying scrolling food images
// No props, shows food images as a sidebar on desktop
// Images come from a static array and are easily editable

// More food images for the sidebar
const foodImages = [
  `${import.meta.env.BASE_URL}imgs/meal-1.jpg`,
  `${import.meta.env.BASE_URL}imgs/meal-2.jpg`,
  `${import.meta.env.BASE_URL}imgs/meal-3.jpg`,
  `${import.meta.env.BASE_URL}imgs/meal-4.jpg`,
  `${import.meta.env.BASE_URL}imgs/meal-5.jpg`,
  `${import.meta.env.BASE_URL}imgs/meal-6.jpg`,
  `${import.meta.env.BASE_URL}imgs/meal-7.jpg`,
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&q=80',
];

// Duplicate images for infinite loop effect
const loopImages = [...foodImages, ...foodImages];

const Sidebar = () => {
  return (
    <aside className="sidebar bg-white p-3 shadow rounded-3">
      <div className="sidebar-images-outer">
        <div className="sidebar-images infinite-scroll">
          {loopImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Food ${idx + 1}`}
              className="sidebar-img"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 