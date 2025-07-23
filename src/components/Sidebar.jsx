import './Sidebar.css';
import React from 'react';

// Sidebar.jsx
// Sidebar component for displaying scrolling food images
// No props, shows food images as a sidebar on desktop
// Images come from a static array and are easily editable

// More food images for the sidebar
const foodImages = [
  '/imgs/meal-1.jpg',
  '/imgs/meal-2.jpg',
  '/imgs/meal-3.jpg',
  '/imgs/meal-4.jpg',
  '/imgs/meal-5.jpg',
  '/imgs/meal-6.jpg',
  '/imgs/meal-7.jpg',
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