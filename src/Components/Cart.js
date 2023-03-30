import React, { useState } from 'react';
import Card from '../UI/Card';
import './Cart.css';
const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartElements = [    {      title: 'Colors',      price: 100,      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',      quantity: 2,    },    {      title: 'Black and white Colors',      price: 50,      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',      quantity: 3,    },    {      title: 'Yellow and Black Colors',      price: 70,      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',      quantity: 1,    },  ];

  const cartItems = cartElements.map((element, index) => (
    <tr key={index}>
      <td>{element.title}</td>
      <td>{element.price}</td>
      <td>{element.quantity}</td>
    </tr>
  ));

  const totalPrice = cartElements.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleBackdropClick = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div onClick={handleCartIconClick}>Cart ({cartElements.length})</div>
      {isCartOpen && (
        <div className="cart-overlay" onClick={handleBackdropClick}>
          <div className="cart-content">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Total Price: {totalPrice}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;