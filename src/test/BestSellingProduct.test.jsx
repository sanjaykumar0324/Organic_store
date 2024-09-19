import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BestSellingProduct from '../pages/home/BestSellingProduct';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import mockFetch from './mocks/mockFetch'; // Adjust the path as necessary
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('BestSellingProduct Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: {
        products: [
          { id: 1, product_name: 'Assorted Coffee' },
          { id: 2, product_name: 'Hand Sanitizer' },
        ],
      },
    });

    global.fetch = jest.fn().mockImplementation(mockFetch);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <BestSellingProduct />
        </MemoryRouter>
      </Provider>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders the heading', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(/Best Selling Products/i);
  });

  test('renders products', async () => {
    expect(await screen.findByText(/Assorted Coffee/i)).toBeInTheDocument();
    expect(await screen.findByText(/Hand Sanitizer/i)).toBeInTheDocument();
  });

  // test('navigates to product page on product click', async () => {
  //   const coffee = screen.getByText(/Assorted Coffee/i);
  //   userEvent.click(coffee);
    
  //   // You may want to test the navigation logic here
  //   expect(window.location.pathname).toBe(`/product/assorted-coffee`); // Adjust as necessary
  // });
});
