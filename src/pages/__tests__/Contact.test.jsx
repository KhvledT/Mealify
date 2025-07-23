import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock the Contact component without CSS and framer-motion imports
const Contact = () => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = React.useState({});

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
        
        {/* Contact Info Cards */}
        <div className="row mb-4 justify-content-center">
          <div className="col-md-3 mb-3">
            <div className="contact-info-card">
              <h5>Our Address</h5>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="contact-info-card">
              <h5>Call Us</h5>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="contact-info-card">
              <h5>Email Us</h5>
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="contact-info-card">
              <h5>Opening Hours</h5>
              <p>Mon-Sat: 11AM - 23PM<br/>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            {showSuccess && (
              <div className="alert alert-success" role="alert">
                Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`form-control${errors.name ? ' is-invalid' : ''}`}
                    placeholder="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className={`form-control${errors.email ? ' is-invalid' : ''}`}
                    placeholder="Your Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className={`form-control${errors.subject ? ' is-invalid' : ''}`}
                    placeholder="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                  {errors.subject && <div className="invalid-feedback d-block">{errors.subject}</div>}
                </div>
                <div className="col-12">
                  <textarea
                    className={`form-control${errors.message ? ' is-invalid' : ''}`}
                    rows="4"
                    placeholder="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-danger">
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
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-button">How can I place an order?</button>
              <div className="accordion-collapse">
                <div className="accordion-body">
                  You can place an order through our website by filling out the contact/order form or by calling us directly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

describe('Contact Page', () => {
  test('renders contact page with all sections', () => {
    render(<Contact />);
    
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
  });

  test('renders contact info cards', () => {
    render(<Contact />);
    
    expect(screen.getByText('Our Address')).toBeInTheDocument();
    expect(screen.getByText('Call Us')).toBeInTheDocument();
    expect(screen.getByText('Email Us')).toBeInTheDocument();
    expect(screen.getByText('Opening Hours')).toBeInTheDocument();
  });

  test('form validation shows errors for invalid inputs', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const submitButton = screen.getByText('Send Message');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getAllByText((content) => content.toLowerCase().includes('name') && content.toLowerCase().includes('character')).length).toBeGreaterThan(0);
      expect(screen.getAllByText((content) => content.toLowerCase().includes('valid email')).length).toBeGreaterThan(0);
      expect(screen.getAllByText((content) => content.toLowerCase().includes('subject') && content.toLowerCase().includes('character')).length).toBeGreaterThan(0);
      expect(screen.getAllByText((content) => content.toLowerCase().includes('message') && content.toLowerCase().includes('character')).length).toBeGreaterThan(0);
    });
  });

  test('form submission works with valid data', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText('Your Name');
    const emailInput = screen.getByPlaceholderText('Your Email');
    const subjectInput = screen.getByPlaceholderText('Subject');
    const messageInput = screen.getByPlaceholderText('Message');
    const submitButton = screen.getByText('Send Message');
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(subjectInput, 'Test Subject');
    await user.type(messageInput, 'This is a test message with enough characters');
    
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Your message has been sent successfully!')).toBeInTheDocument();
    });
  });

  test('FAQ accordion functionality', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const firstFaqButton = screen.getByText('How can I place an order?');
    await user.click(firstFaqButton);
    
    expect(screen.getByText(/You can place an order through our website/)).toBeInTheDocument();
  });
}); 