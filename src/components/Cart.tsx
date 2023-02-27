import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Cart.module.css';

const Cart = () => {
  const cart = (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <p>Your cart is empty.</p>
    </div>
  );

  return ReactDOM.createPortal(
    cart,
    document.getElementById('overlay-root') as HTMLElement
  );
};

export default Cart;
