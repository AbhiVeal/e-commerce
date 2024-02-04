// ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2 className="product-list-heading">Product List</h2>
      <div className="product-list-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
