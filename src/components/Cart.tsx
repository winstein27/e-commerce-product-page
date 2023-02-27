import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Cart.module.css';

import IconButton from './UI/IconButton';

interface Props {
  products: number;
  clearCart: () => void;
}

const Cart = (props: Props) => {
  const cart = (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {props.products === 0 && <p>Your cart is empty.</p>}
      {props.products > 0 && (
        <div className={styles.products}>
          <img
            src="../../images/image-product-1-thumbnail.jpg"
            alt="Product 1 thumbnail"
          />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00 x {props.products}
              <span className={styles.total}> ${props.products * 125}.00</span>
            </p>
          </div>
          <IconButton
            imgPath="../../images/icon-delete.svg"
            className={styles.delete}
            onClick={props.clearCart}
          />

          <button className={styles.checkout} type="button">
            Checkout
          </button>
        </div>
      )}
    </div>
  );

  return ReactDOM.createPortal(
    cart,
    document.getElementById('overlay-root') as HTMLElement
  );
};

export default Cart;
