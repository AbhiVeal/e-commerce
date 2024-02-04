// ProductPage.js
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch products (mock data)
  useEffect(() => {
    // Replace with your API call or data source
    const mockProducts = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 20.99 },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 29.99 },
      { id: 3, name: 'Product 3', description: 'Description 3', price: 20.99 },
      { id: 4, name: 'Product 4', description: 'Description 4', price: 29.99 },
      { id: 5, name: 'Product 1', description: 'Description 1', price: 20.99 },
      { id: 6, name: 'Product 2', description: 'Description 2', price: 29.99 },
      { id: 7, name: 'Product 3', description: 'Description 3', price: 20.99 },
      { id: 8, name: 'Product 4', description: 'Description 4', price: 29.99 },
      { id: 9, name: 'Product 1', description: 'Description 1', price: 20.99 },
      { id: 10, name: 'Product 2', description: 'Description 2', price: 29.99 }
      
      // Add more products as needed
    ];

    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;
