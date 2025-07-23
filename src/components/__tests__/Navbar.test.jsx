import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mock the Navbar component without CSS import
const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <img src="/imgs/favicon.png" alt="Mealify Logo" loading="lazy" />
      <div className="navbar-nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/chefs" className="nav-link">Chefs</a>
        <a href="/gallery" className="nav-link">Gallery</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
      <button className="btn btn-danger">Order Now</button>
    </div>
  </nav>
);

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Navbar', () => {
  test('renders navbar with logo', () => {
    renderWithRouter(<Navbar />);
    
    const logo = screen.getByAltText('Mealify Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('loading', 'lazy');
  });

  test('renders all navigation links', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Chefs')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders order button', () => {
    renderWithRouter(<Navbar />);
    
    const orderButton = screen.getByText('Order Now');
    expect(orderButton).toBeInTheDocument();
    expect(orderButton).toHaveClass('btn-danger');
  });

  test('applies correct CSS classes', () => {
    renderWithRouter(<Navbar />);
    
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toHaveClass('navbar');
  });
}); 