import React from 'react';
import '../pages/Gallery.css';
import { useNavigate } from 'react-router-dom';

// Use the same data as Gallery
const galleryImages = [
  { src: '/imgs/meal-1.jpg', category: 'Pizza', title: 'Pizza', desc: 'Hawaiian pizza with ham and pineapple', price: '$12', calories: 350 },
  { src: '/imgs/meal-2.jpg', category: 'Beef', title: 'Beef Steaks', desc: 'Tasty beef steaks flying above cast iron grate with fire flames.', price: '$18', calories: 520 },
  { src: '/imgs/meal-3.jpg', category: 'Burger', title: 'Burger', desc: 'Grass fed bison hamburger with chips & beer', price: '$10', calories: 600 },
  { src: '/imgs/meal-4.jpg', category: 'Pizza', title: 'Levitation Pizza', desc: 'Levitation pizza on black background.', price: '$14', calories: 400 },
  { src: '/imgs/meal-5.jpg', category: 'Chicken', title: 'Crispy Fried Chicken', desc: 'Golden brown chicken legs with a crunchy coating and juicy meat', price: '$13', calories: 480 },
  { src: '/imgs/meal-6.jpg', category: 'Kebab', title: 'Lyulya Kebab', desc: 'Tender and juicy skewers of ground lamb or beef, flavored with aromatic spices and herbs', price: '$15', calories: 420 },
  { src: '/imgs/meal-7.jpg', category: 'Frittata', title: 'Frittata', desc: 'Frittata or potato pie in a ceramic plate', price: '$9', calories: 300 },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', category: 'Pizza', title: 'Modern Pizza', desc: 'Trendy pizza from the web', price: '$16', calories: 370 },
  { src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', category: 'Chicken', title: 'Grilled Chicken', desc: 'Perfectly grilled chicken breast', price: '$11', calories: 260 },
];

const Menu = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-light py-5">
      <div className="container my-5">
        <h2 className="mb-2 text-danger fw-bold text-center">Menu</h2>
        <p className="text-center text-secondary mb-4">Explore our full menu! All dishes are made with fresh ingredients and served with love.</p>
        <div className="row g-4 justify-content-center">
          {galleryImages.map((item, idx) => (
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
      `}</style>
    </section>
  );
};

export default Menu; 