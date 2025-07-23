import React, { useState } from 'react';

const GalleryCard = ({ img }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="gallery-card border-0 shadow-sm h-100 position-relative"
        style={{height: '100%'}}
      >
        <div className="gallery-img-wrapper position-relative">
          <img src={img.src} className="card-img-top rounded-3" alt={img.title} style={{ height: 200, objectFit: 'cover' }} loading="lazy" />
          <div className="gallery-overlay d-flex flex-column justify-content-center align-items-center text-center">
            <h6 className="fw-bold mb-1 text-light">{img.title}</h6>
            <p className="small text-light mb-2">{img.desc}</p>
            <div className="mb-2 d-flex justify-content-center gap-3">
              <span className="badge bg-light text-dark"><i className="fa-solid fa-dollar-sign me-1"></i>{img.price}</span>
              <span className="badge bg-light text-dark"><i className="fa-solid fa-fire me-1"></i>{img.calories} kcal</span>
            </div>
            <button className="btn btn-outline-light btn-sm rounded-pill px-3" title="Details" onClick={() => setShowModal(true)}>
              <i className="fa-solid fa-info-circle me-1"></i> Details
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-accent-bar"></div>
            <button className="modal-close-btn btn btn-sm position-absolute top-0 end-0 m-2" onClick={() => setShowModal(false)} title="إغلاق">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="text-center p-4" style={{fontFamily: 'Segoe UI, Cairo, sans-serif'}}>
              <img src={img.src} alt={img.title} className="rounded-4 mb-3 modal-img-shadow" style={{width: '110px', height: '110px', objectFit: 'cover'}} />
              <h5 className="fw-bold text-danger mb-1" style={{letterSpacing: '0.5px'}}>{img.title}</h5>
              <div className="mb-2 text-secondary small fw-semibold" style={{color:'#b23a48'}}>{img.category}</div>
              <p className="mb-3 text-dark" style={{fontWeight: 500, fontSize: '1.05rem'}}>{img.desc}</p>
              <div className="d-flex justify-content-center gap-3 mb-2">
                <span className="badge bg-gradient-danger text-light px-3 py-2" style={{fontSize:'1rem', fontWeight:600, background: 'linear-gradient(90deg,#ce1212 60%,#b23a48 100%)'}}><i className="fa-solid fa-dollar-sign me-1"></i>{img.price}</span>
                <span className="badge bg-warning text-dark px-3 py-2" style={{fontSize:'1rem', fontWeight:600, background: 'linear-gradient(90deg,#ffe082 60%,#ffb300 100%)'}}><i className="fa-solid fa-fire me-1"></i>{img.calories} kcal</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modern Modal Styles */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(30, 30, 30, 0.22);
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s;
          backdrop-filter: blur(6px);
        }
        .modal-card {
          background: rgba(255,255,255,0.82);
          border-radius: 24px;
          box-shadow: 0 8px 40px 0 rgba(206,18,18,0.18), 0 2px 16px 0 rgba(0,0,0,0.10);
          min-width: 340px;
          max-width: 95vw;
          min-height: 240px;
          max-height: 92vh;
          position: relative;
          overflow: hidden;
          animation: flyIn 0.25s cubic-bezier(.4,1.5,.5,1);
          border: 1.5px solid #f5f5f5;
          backdrop-filter: blur(12px);
        }
        .modal-accent-bar {
          height: 7px;
          width: 100%;
          background: linear-gradient(90deg,#ce1212 60%,#b23a48 100%);
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          margin-bottom: 0.5rem;
        }
        .modal-close-btn {
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
        .modal-close-btn:hover {
          opacity: 1;
          background: #fff0f3;
          color: #b23a48;
          box-shadow: 0 4px 16px 0 rgba(206,18,18,0.13);
        }
        .modal-img-shadow {
          box-shadow: 0 4px 24px 0 rgba(206,18,18,0.13), 0 2px 8px 0 rgba(0,0,0,0.08);
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes flyIn {
          from { transform: translateY(40px) scale(0.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default GalleryCard; 