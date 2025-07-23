import './Chefs.css';
import React from 'react';
import { motion } from 'framer-motion';
import ChefCard from '../components/ChefCard';

// Chefs data (Arab and foreign, new high quality images)
const chefs = [
  {
    name: 'Ahmad Mansour',
    role: 'Executive Chef',
    img: 'https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Specialist in Middle Eastern cuisine, known for his creative approach to traditional dishes.',
    socials: [
      { icon: 'fa-brands fa-facebook-f', url: '#' },
      { icon: 'fa-brands fa-twitter', url: '#' },
      { icon: 'fa-brands fa-instagram', url: '#' },
    ],
    specialty: 'Middle Eastern',
    experience: '18 years',
    awards: 5,
    dish: 'Lamb Mansaf',
    quote: 'Food is the language of culture and love.'
  },
  {
    name: 'Layla Al-Masri',
    role: 'Pastry Chef',
    img: 'https://images.unsplash.com/photo-1585358682246-23acb1561f6b?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Expert in Arabic and French desserts, blending flavors from East and West.',
    socials: [
      { icon: 'fa-brands fa-facebook-f', url: '#' },
      { icon: 'fa-brands fa-twitter', url: '#' },
      { icon: 'fa-brands fa-instagram', url: '#' },
    ],
    specialty: 'Arabic & French Pastry',
    experience: '12 years',
    awards: 3,
    dish: 'Baklava Cheesecake',
    quote: 'Desserts are happiness in every bite.'
  },
  {
    name: 'William Anderson',
    role: 'Grill Master',
    img: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'American grill expert, famous for his smoky flavors and BBQ techniques.',
    socials: [
      { icon: 'fa-brands fa-facebook-f', url: '#' },
      { icon: 'fa-brands fa-twitter', url: '#' },
      { icon: 'fa-brands fa-instagram', url: '#' },
    ],
    specialty: 'American Grill',
    experience: '10 years',
    awards: 2,
    dish: 'BBQ Ribs',
    quote: 'Grilling brings out the best flavors in food.'
  },
  {
    name: 'Lana Tanaka',
    role: 'Sushi Chef',
    img: 'https://images.unsplash.com/photo-1726749135857-9fad0dc1d23c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Expert in Japanese cuisine, specializing in sushi and sashimi. Known for precision and creativity.',
    socials: [
      { icon: 'fa-brands fa-facebook-f', url: '#' },
      { icon: 'fa-brands fa-twitter', url: '#' },
      { icon: 'fa-brands fa-instagram', url: '#' },
    ],
    specialty: 'Japanese Sushi',
    experience: '12 years',
    awards: 4,
    dish: 'Dragon Roll',
    quote: 'Sushi is harmony on a plate.'
  },
  {
    name: 'Carlos Mendez',
    role: 'Sous Chef',
    img: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Passionate about Latin flavors and fusion cuisine. Brings energy and innovation to every dish.',
    socials: [
      { icon: 'fa-brands fa-facebook-f', url: '#' },
      { icon: 'fa-brands fa-twitter', url: '#' },
      { icon: 'fa-brands fa-instagram', url: '#' },
    ],
    specialty: 'Latin Fusion',
    experience: '9 years',
    awards: 2,
    dish: 'Taco Al Pastor',
    quote: 'Cooking is about sharing culture and joy.'
  },
];

// Animation variants for Framer Motion
const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.25,
      duration: 0.8,
    },
  },
};

// Chefs page component
const Chefs = () => {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <h2 className="mb-4 text-danger fw-bold text-center">Our Professional Chefs</h2>
        <div className="row justify-content-center">
          {chefs.map((chef, idx) => (
            <div className="col-md-6 col-lg-4 mb-4" key={idx} >
              <ChefCard chef={chef} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs; 