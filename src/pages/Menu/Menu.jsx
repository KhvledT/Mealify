import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Use the same data as Gallery
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

const categories = [
  { name: 'All', label: 'All' },
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

const Menu = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const filteredMeals = selectedCategory === 'All' ? galleryImages : galleryImages.filter(m => m.category === selectedCategory);
  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth >= 992);
  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

// بيانات وهمية للعروض
const discountMeals = [
  { src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', category: 'Chicken', title: 'Grilled Chicken Offer', desc: 'Special grilled chicken with 30% off', price: '$8', oldPrice: '$12', calories: 260 },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', category: 'Pizza', title: 'Pizza Margherita Deal', desc: 'Classic Margherita pizza with 25% off', price: '$9', oldPrice: '$12', calories: 350 },
  { src: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&w=800&q=80', category: 'Burger', title: 'Double Burger Combo', desc: 'Double burger + fries + drink, 20% off', price: '$11', oldPrice: '$14', calories: 700 },
];

  return (
    <section className="bg-light py-5">
      <div className="container my-5">
        <h2 className="mb-2 text-danger fw-bold text-center">Menu</h2>
        <p className="text-center text-secondary mb-4">Explore our full menu! All dishes are made with fresh ingredients and served with love.</p>
        {/* Offers Section */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 position-relative">
            {/* SALE Banner */}
            <motion.div
              initial={{ x: -80, rotate: -12 }}
              animate={{ x: 0, rotate: -12 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className="sale-banner position-absolute top-0 start-0"
              style={{zIndex:3}}
            >
              <span style={{background:'#FFD600',color:'#B23A48',fontWeight:900,padding:'0.5em 2.2em',fontSize:'1.2rem',borderRadius:'0 0 18px 0',boxShadow:'0 2px 8px 0 rgba(0,0,0,0.10)',letterSpacing:'2px'}}>SALE</span>
            </motion.div>
            {isLargeScreen ? (
              <motion.div
                className="offers-bg-animated d-flex flex-wrap gap-4 justify-content-center align-items-center p-5 rounded-4 shadow position-relative"
                style={{minHeight:'300px',background:'linear-gradient(120deg,#ce1212 70%,#b23a48 100%)',overflow:'hidden'}}
                initial={{ boxShadow: '0 0 60px 0 #b23a48, 0 0 60px 0 #ce1212' }}
                animate={{
                  boxShadow: [
                    '40px 0 80px 0 #b23a48, -40px 0 80px 0 #ce1212',
                    '-40px 0 80px 0 #b23a48, 40px 0 80px 0 #ce1212',
                    '40px 0 80px 0 #b23a48, -40px 0 80px 0 #ce1212',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              >
                {discountMeals.map((item, idx) => {
                  const isSpicy = /spicy|hot/i.test(item.title) || /spicy|hot/i.test(item.desc);
                  const isCenter = idx === 1;
                  const cardShadow = isCenter
                    ? '0 8px 32px 0 rgba(206,18,18,0.13)'
                    : '0 4px 16px 0 rgba(0,0,0,0.10)';
                  const minW = isCenter ? 'clamp(220px,32vw,340px)' : 'clamp(180px,24vw,270px)';
                  const maxW = isCenter ? 'clamp(260px,40vw,380px)' : 'clamp(220px,30vw,320px)';
                  const minH = isCenter ? 'clamp(320px,38vw,470px)' : 'clamp(260px,30vw,400px)';
                  const H = isCenter ? 'clamp(320px,38vw,470px)' : 'clamp(260px,30vw,400px)';
                  return (
                    <motion.div
                      key={item.title+idx}
                      initial={{ opacity: 0, scale: isCenter ? 1.12 : 1, y: 60 }}
                      animate={{ opacity: 1, scale: isCenter ? 1.12 : 1, y: 0 }}
                      whileHover={{ scale: isCenter ? 1.16 : 1.08, zIndex: 2, height: isCenter ? 500 : 420 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 14, duration: 0.18 }}
                      className="menu-offer-card shadow-lg rounded-4 bg-white d-flex flex-column align-items-center p-4 position-relative"
                      style={{
                        minWidth: minW,
                        maxWidth: maxW,
                        minHeight: minH,
                        height: H,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        boxShadow: cardShadow,
                        margin: isCenter ? '0 1.5rem' : '0 0.5rem',
                        zIndex: isCenter ? 1 : 0
                      }}
                    >
                      {isSpicy && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, rotate: [0, 20, -20, 0] }}
                          transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
                          className="position-absolute top-0 end-0 m-2 px-3 py-1 rounded-pill fw-bold text-light bg-danger d-flex align-items-center"
                          style={{fontSize:'1rem',zIndex:2,boxShadow:'0 2px 8px 0 rgba(206,18,18,0.10)'}}
                        >
                          <span role="img" aria-label="spicy" className="me-1">🌶️</span> Spicy
                        </motion.div>
                      )}
                      <img src={item.src} alt={item.title} className="rounded-4 mb-3 menu-img-shadow" style={{width:'85%',aspectRatio:'4/3',height:'auto',objectFit:'cover',boxShadow:'0 4px 24px 0 rgba(206,18,18,0.13)'}} />
                      <h5 className="fw-bold text-danger mb-1 text-center" style={{fontSize:'1.25rem'}}>{item.title}</h5>
                      <div className="mb-1 text-secondary small fw-semibold text-center">{item.category}</div>
                      <p className="mb-2 text-dark text-center" style={{fontWeight:500,fontSize:'1.05rem',minHeight:'38px'}}>{item.desc}</p>
                      <span className="badge bg-gradient-danger text-light px-3 py-2 mb-2" style={{fontSize:'1.2rem',fontWeight:700,background:'linear-gradient(90deg,#ce1212 60%,#b23a48 100%)',boxShadow:'0 2px 8px 0 rgba(206,18,18,0.10)'}}>
                        <i className="fa-solid fa-dollar-sign me-1"></i>{item.price}
                        <span className="text-decoration-line-through ms-2 text-secondary" style={{fontSize:'1em'}}>{item.oldPrice}</span>
                      </span>
                      <button
                        className="btn order-offer-btn mt-auto"
                        style={{
                          width: '60%',
                          background: '#FFD600',
                          color: '#B23A48',
                          fontWeight: 700,
                          fontSize: '1rem',
                          border: 'none',
                          borderRadius: '32px',
                          padding: '0.6em 0',
                          boxShadow: '0 2px 8px 0 rgba(206,18,18,0.10)',
                          letterSpacing: '1px',
                          marginTop: '1.2rem',
                          transition: 'background 0.18s, box-shadow 0.18s, transform 0.14s',
                          outline: 'none',
                          display: 'block',
                          textAlign: 'center',
                        }}
                        onClick={() => navigate('/order', { state: { meal: item } })}
                      >
                        Order Now
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="offers-mobile-bg d-flex flex-column gap-3 align-items-center p-3 rounded-4 bg-white position-relative" style={{background:'#fff',boxShadow:'0 2px 12px 0 rgba(206,18,18,0.07)'}}>
                {discountMeals.map((item, idx) => {
                  const isSpicy = /spicy|hot/i.test(item.title) || /spicy|hot/i.test(item.desc);
                  return (
                    <div
                      key={item.title+idx}
                      className="menu-offer-card rounded-4 d-flex flex-column align-items-center p-3 w-100"
                      style={{
                        maxWidth: '95vw',
                        width: '95%',
                        minHeight: '340px',
                        background: '#fff',
                        boxShadow: '0 2px 12px 0 rgba(206,18,18,0.07)',
                        margin: '0 auto',
                        zIndex: 0
                      }}
                    >
                      {isSpicy && (
                        <div
                          className="position-absolute top-0 end-0 m-2 px-3 py-1 rounded-pill fw-bold text-light bg-danger d-flex align-items-center"
                          style={{fontSize:'1rem',zIndex:2,boxShadow:'0 2px 8px 0 rgba(206,18,18,0.10)'}}
                        >
                          <span role="img" aria-label="spicy" className="me-1">🌶️</span> Spicy
                        </div>
                      )}
                      <img src={item.src} alt={item.title} className="rounded-4 mb-3 menu-img-shadow" style={{width:'90%',aspectRatio:'4/3',height:'auto',objectFit:'cover',boxShadow:'0 2px 8px 0 rgba(206,18,18,0.08)'}} />
                      <h5 className="fw-bold text-danger mb-1 text-center" style={{fontSize:'1.1rem'}}>{item.title}</h5>
                      <div className="mb-1 text-secondary small fw-semibold text-center">{item.category}</div>
                      <p className="mb-2 text-dark text-center" style={{fontWeight:500,fontSize:'0.98rem',minHeight:'32px'}}>{item.desc}</p>
                      <span className="badge bg-gradient-danger text-light px-3 py-2 mb-2" style={{fontSize:'1.1rem',fontWeight:600,background:'linear-gradient(90deg,#ce1212 60%,#b23a48 100%)'}}>
                        <i className="fa-solid fa-dollar-sign me-1"></i>{item.price}
                        <span className="text-decoration-line-through ms-2 text-secondary" style={{fontSize:'1em'}}>{item.oldPrice}</span>
                      </span>
                      <button
                        className="btn order-offer-btn mt-auto"
                        style={{
                          width: '70%',
                          background: '#FFD600',
                          color: '#B23A48',
                          fontWeight: 700,
                          fontSize: '0.98rem',
                          border: 'none',
                          borderRadius: '32px',
                          padding: '0.5em 0',
                          boxShadow: '0 2px 8px 0 rgba(206,18,18,0.08)',
                          letterSpacing: '1px',
                          marginTop: '1.1rem',
                          transition: 'background 0.18s, box-shadow 0.18s, transform 0.14s',
                          outline: 'none',
                          display: 'block',
                          textAlign: 'center',
                        }}
                        onClick={() => navigate('/order', { state: { meal: item } })}
                      >
                        Order Now
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* Category Buttons */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 d-flex flex-wrap gap-2 justify-content-center">
            {categories.map(cat => (
              <button
                key={cat.name}
                className={`btn btn-outline-danger px-4 py-2 fw-bold rounded-pill${selectedCategory === cat.name ? ' active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        {/* Meals Grid */}
        <div className="row g-4 justify-content-center">
          {filteredMeals.map((item, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.src + idx}>
              <div className="menu-card shadow-sm rounded-4 bg-white h-100 d-flex flex-column align-items-center p-3 position-relative" style={{minHeight:'400px',height:'400px',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                <img src={item.src} alt={item.title} className="rounded-4 mb-3 menu-img-shadow" style={{width:'85%',aspectRatio:'4/3',height:'auto',objectFit:'cover',boxShadow:'0 2px 16px 0 rgba(206,18,18,0.10)'}} />
                <h5 className="fw-bold text-danger mb-1" style={{letterSpacing:'0.5px'}}>{item.title}</h5>
                <div className="mb-2 text-secondary small fw-semibold" style={{color:'#b23a48'}}>{item.category}</div>
                <p className="mb-2 text-dark text-center" style={{fontWeight:500,fontSize:'1.05rem',minHeight:'48px'}}>{item.desc}</p>
                <span className="badge bg-gradient-danger text-light px-3 py-2 mb-2" style={{fontSize:'1.1rem',fontWeight:600,background:'linear-gradient(90deg,#ce1212 60%,#b23a48 100%)'}}><i className="fa-solid fa-dollar-sign me-1"></i>{item.price}</span>
                <button className="btn btn-danger rounded-pill mt-auto px-4 py-2 order-btn-modern" style={{fontWeight:600, fontSize:'1.05rem'}} onClick={() => navigate('/order', { state: { meal: item } })}>
                  <i className="fa-solid fa-basket-shopping me-2"></i>Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Menu Card Modern Styles */}
      <style>{`
        .menu-card {
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .menu-card:hover {
          transform: translateY(-7px) scale(1.035);
          box-shadow: 0 8px 32px 0 rgba(206,18,18,0.13);
        }
        .menu-img-shadow {
          box-shadow: 0 4px 24px 0 rgba(206,18,18,0.13), 0 2px 8px 0 rgba(0,0,0,0.08);
        }
        .order-btn-modern {
          background: linear-gradient(90deg,#ce1212 60%,#b23a48 100%);
          border: none;
          box-shadow: 0 2px 12px 0 rgba(206,18,18,0.10);
          transition: background 0.18s, box-shadow 0.18s, transform 0.18s;
        }
        .order-btn-modern:hover {
          background: linear-gradient(90deg,#b23a48 60%,#ce1212 100%);
          box-shadow: 0 4px 16px 0 rgba(206,18,18,0.13);
          transform: translateY(-2px) scale(1.04);
        }
        @media (min-width: 990px) and (max-width: 1400px) {
          .menu-offer-card {
            width: 250px !important;
            height: 400px !important;
            transition: min-width 0.2s, width 0.2s, min-height 0.2s, height 0.2s;
          }
          .menu-offer-card img {
            width: 90% !important;
            aspect-ratio: 4/3 !important;
            height: auto !important;
          }
          .menu-offer-card .order-offer-btn {
            font-size: 0.75rem !important;
            padding: 0.3em 0 !important;
            width: 70% !important;
          }
          .menu-offer-card .bg-gradient-danger {
            font-size: 0.8rem !important;
            padding: 0.3em 0.7em !important;
          }
          .menu-offer-card h5 {
            font-size: 1rem !important;
          }
          .menu-offer-card p, .menu-offer-card div, .menu-offer-card span {
            font-size: 0.85rem !important;
          }
        }
        @media (max-width: 990px) {
          .offers-mobile-bg {
            background: #ce1212 !important;
            border-radius: 24px;
            padding: 1.5rem 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Menu; 