import React, { useState } from 'react';

import styles from './ProductPrice.module.css';

import IconButton from '../UI/IconButton';

interface Props {
  addProductsToCart: (items: number) => void;
}

const ProductPrice = (props: Props) => {
  const [counter, setCounter] = useState(1);

  const addCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const subtractCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 1) {
        return prevCounter - 1;
      }

      return 1;
    });
  };

  const addToCart = () => {
    props.addProductsToCart(counter);
    setCounter(1);
  };

  return (
    <>
      <div className={styles.price}>
        <div className={styles.actual}>
          $125.00 <span>50%</span>
        </div>
        <div className={styles.old}>$250.00</div>
      </div>
      <div className={styles.counter}>
        <IconButton
          className={styles.minus}
          imgPath="../../../images/icon-minus.svg"
          onClick={subtractCounter}
        />
        <span>{counter}</span>
        <IconButton
          className={styles.plus}
          imgPath="../../../images/icon-plus.svg"
          onClick={addCounter}
        />
      </div>
      <button className={styles.button} onClick={addToCart}>
        <img src="../../../images/icon-cart-w.svg" alt="" />
        Add to cart
      </button>
    </>
  );
};

export default ProductPrice;
