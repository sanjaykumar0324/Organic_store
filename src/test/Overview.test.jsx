import React from 'react';
import { render, screen } from '@testing-library/react';
import Overview from '../pages/home/Overview';
import '@testing-library/jest-dom';


describe('Overview Component', () => {
  test('renders the Overview component correctly', () => {
    render(<Overview />);
    
    // screen.debug(); 

    const mainHeading = screen.getByRole('heading', { name: /Join The Organic Movement!/i });
    expect(mainHeading).toBeInTheDocument();

    const subHeading = screen.getByText(/Best Quality Products/i);
    expect(subHeading).toBeInTheDocument();

    const paragraph = screen.getByText(/Lorem ipsum dolor sit amet/i);
    expect(paragraph).toBeInTheDocument();

    const button = screen.getByText(/Shop Now/i);
    expect(button).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png');
  });
});
