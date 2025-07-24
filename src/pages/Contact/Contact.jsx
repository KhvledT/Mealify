import './Contact.css';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactInfoCard from '../../components/ContactInfoCard/ContactInfoCard.jsx';
import FaqAccordionItem from '../../components/FaqAccordionItem/FaqAccordionItem.jsx';

const faqs = [
  {
    q: 'How can I place an order?',
    a: 'You can place an order through our website by filling out the contact/order form or by calling us directly.'
  },
  {
    q: 'Do you offer vegan or gluten-free options?',
    a: 'Yes! We have a variety of vegan and gluten-free dishes. Please mention your preference in the order form.'
  },
  {
    q: 'Can I book a table for a group?',
    a: 'Absolutely! Please specify the number of guests and your preferred date/time in the message.'
  },
];

const faqAnswerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, type: 'spring', bounce: 0.18 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name || form.name.trim().length < 3) errs.name = 'Please enter your name (at least 3 characters).';
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Please enter a valid email address.';
    if (!form.subject || form.subject.trim().length < 5) errs.subject = 'Please enter a subject (at least 5 characters).';
    if (!form.message || form.message.trim().length < 10) errs.message = 'Please enter a message (at least 10 characters).';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setShowSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <section className="bg-white py-5">
      <div className="container">
        <h2 className="mb-4 text-danger fw-bold text-center">Contact Us</h2>
        <div className="row mb-4 justify-content-center">
          {/* Info cards */}
          {[
            { icon: 'fa-location-dot', title: 'Our Address', text: 'A108 Adam Street, New York, NY 535022' },
            { icon: 'fa-phone', title: 'Call Us', text: '+1 5589 55488 55' },
            { icon: 'fa-envelope', title: 'Email Us', text: 'contact@example.com' },
            { icon: 'fa-clock', title: 'Opening Hours', text: 'Mon-Sat: 11AM - 23PM\nSunday: Closed' },
          ].map((info, idx) => (
            <div className="col-md-3 mb-3" key={idx}>
              <ContactInfoCard icon={info.icon} title={info.title} text={info.text} />
            </div>
          ))}
        </div>
        {/* Google Map */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-10">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm mb-4 contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27347.64268389217!2d31.403439165099456!3d31.041421283848038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1744485012309!5m2!1sar!2seg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Contact/order form */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            {showSuccess && (
              <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                <i className="fa-solid fa-circle-check me-2"></i>
                Your message has been sent successfully!
              </div>
            )}
            <form className="bg-light p-4 rounded-4 shadow-sm contact-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="row g-3">
                <div className="col-md-6 position-relative">
                  <span className="form-icon"><i className="fa-solid fa-user"></i></span>
                  <input
                    type="text"
                    className={`form-control ps-5${errors.name ? ' is-invalid' : ''}`}
                    placeholder="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    minLength={3}
                    required
                  />
                  {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                </div>
                <div className="col-md-6 position-relative">
                  <span className="form-icon"><i className="fa-solid fa-envelope"></i></span>
                  <input
                    type="email"
                    className={`form-control ps-5${errors.email ? ' is-invalid' : ''}`}
                    placeholder="Your Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                </div>
                <div className="col-12 position-relative">
                  <span className="form-icon"><i className="fa-solid fa-tag"></i></span>
                  <input
                    type="text"
                    className={`form-control ps-5${errors.subject ? ' is-invalid' : ''}`}
                    placeholder="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    minLength={5}
                    required
                  />
                  {errors.subject && <div className="invalid-feedback d-block">{errors.subject}</div>}
                </div>
                <div className="col-12 position-relative">
                  <span className="form-icon"><i className="fa-solid fa-message"></i></span>
                  <textarea
                    className={`form-control ps-5${errors.message ? ' is-invalid' : ''}`}
                    rows="4"
                    placeholder="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    minLength={10}
                    required
                  ></textarea>
                  {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-danger px-5 contact-send-btn">
                    <i className="fa-solid fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="faq-section mt-5">
          <h4 className="fw-bold text-danger mb-4 text-center">Frequently Asked Questions</h4>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, idx) => (
              <FaqAccordionItem
                key={idx}
                faq={faq}
                idx={idx}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
                faqAnswerVariants={faqAnswerVariants}
                AnimatePresence={AnimatePresence}
                motion={motion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 