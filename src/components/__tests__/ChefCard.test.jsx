import React from 'react';
import { render, screen } from '@testing-library/react';
import ChefCard from '../ChefCard';

describe('ChefCard', () => {
  const mockChef = {
    name: 'Chef John',
    specialty: 'Italian Cuisine',
    experience: '15 years',
    img: '/imgs/chefs-1.jpg',
    quote: 'Cooking is an art that brings people together.',
    socials: [
      { icon: 'fa-facebook', url: 'https://facebook.com' },
      { icon: 'fa-twitter', url: 'https://twitter.com' },
      { icon: 'fa-instagram', url: 'https://instagram.com' }
    ]
  };

  test('renders chef card with correct content', () => {
    render(<ChefCard chef={mockChef} />);
    
    expect(screen.getByText('Chef John')).toBeInTheDocument();
    expect(screen.getByText('Italian Cuisine')).toBeInTheDocument();
    expect(screen.getByText(/15 years/)).toBeInTheDocument();
  });

  test('renders chef image with correct attributes', () => {
    render(<ChefCard chef={mockChef} />);
    
    const image = screen.getByAltText('Chef John');
    expect(image).toHaveAttribute('src', '/imgs/chefs-1.jpg');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  test('applies correct CSS classes', () => {
    render(<ChefCard chef={mockChef} />);
    
    const cardElement = screen.getByText('Chef John').closest('.card');
    expect(cardElement).toHaveClass('chef-card');
  });
}); 