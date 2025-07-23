import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureCard from '../FeatureCard';

describe('FeatureCard', () => {
  const mockProps = {
    icon: 'fa-utensils',
    title: 'Test Feature',
    desc: 'Test description'
  };

  test('renders feature card with correct content', () => {
    render(<FeatureCard {...mockProps} />);
    
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  test('renders icon with correct class', () => {
    render(<FeatureCard {...mockProps} />);
    
    const iconElement = screen.getByText('Test Feature').closest('div').querySelector('i');
    expect(iconElement).toHaveClass('fa-utensils');
  });

  test('applies correct CSS classes', () => {
    render(<FeatureCard {...mockProps} />);
    
    const cardElement = screen.getByText('Test Feature').closest('div');
    expect(cardElement).toHaveClass('feature-card');
  });
}); 