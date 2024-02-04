// CartPage.js
import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20.99 },
    // Add more items as needed
  ]);

  const removeFromCart = itemToRemove => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <div>
      <h1> Cart Page</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
