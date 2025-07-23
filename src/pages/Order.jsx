import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VAT_RATE = 0.14; // 14% value-added tax

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const meal = location.state?.meal;
  const coupon = location.state?.coupon || null;

  React.useEffect(() => {
    if (!meal) navigate('/menu', { replace: true });
  }, [meal, navigate]);

  if (!meal) return null;

  const priceNum = Number(meal.price.replace(/[^\d.]/g, ''));
  const vat = Math.round(priceNum * VAT_RATE * 100) / 100;
  let total = priceNum + vat;
  const PROMO_CODES = {
    'SAVE20': { type: 'percent', value: 20, label: '20% OFF' },
    'FOOD10': { type: 'percent', value: 10, label: '10% OFF' },
  };
  const [promoInput, setPromoInput] = React.useState('');
  const [appliedPromo, setAppliedPromo] = React.useState(null);
  const [promoError, setPromoError] = React.useState('');
  let discount = 0;
  let promoLabel = '';
  let promo = appliedPromo || coupon;
  if (promo && promo.type === 'percent') {
    discount = Math.round(total * (promo.value / 100) * 100) / 100;
    total = Math.round((total - discount) * 100) / 100;
    promoLabel = promo.label || '';
  } else if (promo && promo.type === 'fixed') {
    discount = promo.value;
    total = Math.max(0, Math.round((total - discount) * 100) / 100);
    promoLabel = promo.label || '';
  }

  return (
    <section className="order-section d-flex align-items-center justify-content-center" style={{minHeight:'100vh',background:'#fafbfc'}}>
      <div className="order-card-modern bg-white rounded-4 shadow-lg p-4 position-relative" style={{maxWidth:400, width:'100%'}}>
        <div className="order-accent-bar mb-3"></div>
        <button className="order-close-btn btn btn-sm position-absolute top-0 end-0 m-2" onClick={() => navigate('/menu')} title="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="text-center">
          <img src={meal.src} alt={meal.title} className="rounded-4 mb-3 order-img-shadow" style={{width:'100px',height:'100px',objectFit:'cover'}} />
          <h4 className="fw-bold text-danger mb-1" style={{letterSpacing:'0.5px'}}>{meal.title}</h4>
          <div className="mb-2 text-secondary small fw-semibold" style={{color:'#b23a48'}}>{meal.category}</div>
          <p className="mb-3 text-dark" style={{fontWeight:500}}>{meal.desc}</p>
        </div>
        <div className="order-summary my-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-semibold">Base Price:</span>
            <span className="fw-bold">{meal.price}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-semibold">VAT (14%)</span>
            <span className="fw-bold text-warning">${vat}</span>
          </div>
          {/* Promo code input */}
          <div className="mb-2">
            <label className="form-label fw-semibold mb-1" htmlFor="promo-input">Promo Code</label>
            <div className="d-flex gap-2 align-items-center">
              <input
                id="promo-input"
                className="form-control rounded-pill px-3"
                style={{maxWidth:180, fontWeight:600, letterSpacing:'1px'}}
                placeholder="Enter code..."
                value={promoInput}
                onChange={e => { setPromoInput(e.target.value.toUpperCase()); setPromoError(''); }}
                disabled={!!appliedPromo}
              />
              <button
                className="btn btn-outline-success rounded-pill px-3"
                style={{fontWeight:600}}
                disabled={!!appliedPromo || !promoInput}
                onClick={() => {
                  const code = promoInput.trim().toUpperCase();
                  if (PROMO_CODES[code]) {
                    setAppliedPromo(PROMO_CODES[code]);
                    setPromoError('');
                  } else {
                    setPromoError('Invalid code');
                  }
                }}
                type="button"
              >Apply</button>
              {appliedPromo && (
                <button className="btn btn-outline-danger rounded-pill px-2 py-1 ms-1" title="Remove code" onClick={() => { setAppliedPromo(null); setPromoInput(''); }}><i className="fa-solid fa-xmark"></i></button>
              )}
            </div>
            {promoError && <div className="text-danger small mt-1">{promoError}</div>}
            {appliedPromo && <div className="text-success small mt-1">Code applied: <b>{promoInput}</b> ({promoLabel})</div>}
          </div>
          {discount > 0 && (
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-semibold text-success">Promo Discount</span>
              <span className="fw-bold text-success">-${discount}</span>
            </div>
          )}
          {coupon && (
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-semibold text-success">Coupon Discount</span>
              <span className="fw-bold text-success">-${discount}</span>
            </div>
          )}
          <hr />
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold fs-5">Total</span>
            <span className="fw-bold fs-5 text-danger">${total}</span>
          </div>
        </div>
        {/* Coupon input (optional, not functional) */}
        {/* <input className="form-control mb-3" placeholder="أدخل كود الكوبون (اختياري)" /> */}
        <button className="btn btn-danger w-100 rounded-pill order-btn-modern mt-3 py-2 fs-5 fw-bold">
          <i className="fa-solid fa-basket-shopping me-2"></i>Place Order
        </button>
      </div>
      <style>{`
        .order-section {
          background: linear-gradient(120deg, #fff 60%, #f8f9fa 100%);
        }
        .order-card-modern {
          box-shadow: 0 8px 40px 0 rgba(206,18,18,0.18), 0 2px 16px 0 rgba(0,0,0,0.10);
          border: 1.5px solid #f5f5f5;
          backdrop-filter: blur(8px);
        }
        .order-accent-bar {
          height: 7px;
          width: 100%;
          background: linear-gradient(90deg,#ce1212 60%,#b23a48 100%);
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
        }
        .order-img-shadow {
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
        .order-close-btn {
          font-size: 1.35rem;
          line-height: 1;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.85;
          z-index: 2;
          background: rgba(255,255,255,0.7);
          color: #ce1212;
          border: none;
          box-shadow: 0 2px 8px 0 rgba(206,18,18,0.08);
          transition: background 0.18s, color 0.18s, box-shadow 0.18s, opacity 0.18s;
        }
        .order-close-btn:hover {
          opacity: 1;
          background: #fff0f3;
          color: #b23a48;
          box-shadow: 0 4px 16px 0 rgba(206,18,18,0.13);
        }
      `}</style>
    </section>
  );
};

export default Order; 