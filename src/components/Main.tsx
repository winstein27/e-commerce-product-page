import React from 'react';

import styles from './Main.module.css';

import PictureGallery from './main/PictureGallery';
import ProductPrice from './main/ProductPrice';

interface Props {
  addProductsToCart: (items: number) => void;
}

const Main = (props: Props) => {
  return (
    <main className={styles.main}>
      <section className={styles.pictures}>
        <PictureGallery />
      </section>

      <section className={styles['product-info']}>
        <h3 className={styles.manufacturer}>Sneaker Company</h3>
        <h2 className={styles.title}>Fall Limited Edition Sneakers</h2>
        <p className={styles.description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <ProductPrice addProductsToCart={props.addProductsToCart} />
      </section>
    </main>
  );
};

export default Main;
