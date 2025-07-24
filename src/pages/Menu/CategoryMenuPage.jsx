import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const categories = [
  { name: 'Pizza', label: 'Pizza' },
  { name: 'Burger', label: 'Burger' },
  { name: 'Chicken', label: 'Chicken' },
  { name: 'Grill', label: 'Grill' },
  { name: 'Salad', label: 'Salad' },
  { name: 'Pasta', label: 'Pasta' },
  { name: 'Sushi', label: 'Sushi' },
  { name: 'Dessert', label: 'Dessert' },
  { name: 'Drinks', label: 'Drinks' },
];

// بيانات وهمية للوجبات حسب التصنيف
const allMeals = [
  // بيتزا
  { src: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=600&q=80', category: 'Pizza', title: 'Pepperoni Pizza', desc: 'Classic pepperoni pizza with mozzarella', price: '$13', calories: 400 },
  { src: 'https://images.pexels.com/photos/4109126/pexels-photo-4109126.jpeg?auto=compress&w=600&q=80', category: 'Pizza', title: 'Vegetarian Pizza', desc: 'Veggie pizza with olives and peppers', price: '$12', calories: 350 },
  // هامبورجر
  { src: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&w=600&q=80', category: 'Burger', title: 'Classic Burger', desc: 'Beef burger with cheese and lettuce', price: '$10', calories: 600 },
  { src: 'https://images.pexels.com/photos/1616748/pexels-photo-1616748.jpeg?auto=compress&w=600&q=80', category: 'Burger', title: 'Chicken Burger', desc: 'Grilled chicken burger with sauce', price: '$9', calories: 520 },
  // دجاج
  { src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', category: 'Chicken', title: 'Crispy Fried Chicken', desc: 'Golden brown chicken legs', price: '$13', calories: 480 },
  { src: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&w=600&q=80', category: 'Chicken', title: 'Chicken Wings', desc: 'Spicy chicken wings', price: '$8', calories: 350 },
  // مشاوي
  { src: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&w=600&q=80', category: 'Grill', title: 'Mixed Grill', desc: 'Assorted grilled meats', price: '$18', calories: 700 },
  { src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', category: 'Grill', title: 'Kebab Skewers', desc: 'Juicy lamb kebabs', price: '$15', calories: 420 },
  // سلطات
  { src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=600&q=80', category: 'Salad', title: 'Greek Salad', desc: 'Fresh salad with feta cheese', price: '$7', calories: 180 },
  { src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=600&q=80', category: 'Salad', title: 'Caesar Salad', desc: 'Classic Caesar with chicken', price: '$8', calories: 220 },
  // باستا
  { src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', category: 'Pasta', title: 'Spaghetti Bolognese', desc: 'Pasta with meat sauce', price: '$11', calories: 350 },
  { src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', category: 'Pasta', title: 'Penne Alfredo', desc: 'Creamy Alfredo sauce', price: '$10', calories: 320 },
  // سوشي
  { src: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&w=600&q=80', category: 'Sushi', title: 'Salmon Sushi', desc: 'Fresh salmon sushi rolls', price: '$14', calories: 250 },
  { src: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&w=600&q=80', category: 'Sushi', title: 'Avocado Sushi', desc: 'Vegetarian avocado sushi', price: '$12', calories: 210 },
  // حلويات
  { src: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&w=600&q=80', category: 'Dessert', title: 'Chocolate Cake', desc: 'Rich chocolate cake', price: '$6', calories: 400 },
  { src: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&w=600&q=80', category: 'Dessert', title: 'Cheesecake', desc: 'Classic cheesecake', price: '$7', calories: 380 },
  // مشروبات
  { src: 'https://images.pexels.com/photos/594697/pexels-photo-594697.jpeg?auto=compress&w=600&q=80', category: 'Drinks', title: 'Fresh Orange Juice', desc: '100% fresh orange', price: '$4', calories: 90 },
  { src: 'https://images.pexels.com/photos/594697/pexels-photo-594697.jpeg?auto=compress&w=600&q=80', category: 'Drinks', title: 'Cola', desc: 'Chilled cola can', price: '$3', calories: 120 },
];

const CategoryMenuPage = ({ category }) => {
  const navigate = useNavigate();
  const meals = allMeals.filter(m => m.category === category);
  return (
    <section className="bg-light py-5">
      <div className="container my-5">
        <button className="btn btn-outline-secondary mb-4 fw-bold px-4 py-2 rounded-pill d-inline-flex align-items-center" onClick={() => navigate('/menu')}>
          <FaArrowLeft className="me-2" /> Back to Menu
        </button>
        <h2 className="mb-2 text-danger fw-bold text-center">{category} Menu</h2>
        {/* Category buttons */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 d-flex flex-wrap gap-2 justify-content-center">
            {categories.map(cat => (
              <button key={cat.name} className={`btn btn-outline-danger px-4 py-2 fw-bold rounded-pill${cat.name === category ? ' active' : ''}`} onClick={() => navigate(`/menu/${cat.name.toLowerCase()}`)}>{cat.label}</button>
            ))}
          </div>
        </div>
        {/* Animated meal cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="row g-4 justify-content-center"
          >
            {meals.length === 0 && <div className="text-center text-secondary">No meals found for this category.</div>}
            {meals.map((item, idx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={item.src + idx}>
                <div className="menu-card shadow-sm rounded-4 bg-white h-100 d-flex flex-column align-items-center p-3 position-relative" style={{minHeight:'340px'}}>
                  <img src={item.src} alt={item.title} className="rounded-4 mb-3 menu-img-shadow" style={{width:'110px',height:'110px',objectFit:'cover',boxShadow:'0 2px 16px 0 rgba(206,18,18,0.10)'}} />
                  <h5 className="fw-bold text-danger mb-1" style={{letterSpacing:'0.5px'}}>{item.title}</h5>
                  <div className="mb-2 text-secondary small fw-semibold" style={{color:'#b23a48'}}>{item.category}</div>
                  <p className="mb-2 text-dark text-center" style={{fontWeight:500,fontSize:'1.05rem',minHeight:'48px'}}>{item.desc}</p>
                  <span className="badge bg-gradient-danger text-light px-3 py-2 mb-2" style={{fontSize:'1.1rem',fontWeight:600,background:'linear-gradient(90deg,#ce1212 60%,#b23a48 100%)'}}><i className="fa-solid fa-dollar-sign me-1"></i>{item.price}</span>
                  <button className="btn btn-danger rounded-pill mt-2 px-4 py-2 order-btn-modern" style={{fontWeight:600, fontSize:'1.05rem'}} onClick={() => navigate('/order', { state: { meal: item } })}>
                    <i className="fa-solid fa-basket-shopping me-2"></i>Order Now
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CategoryMenuPage; 