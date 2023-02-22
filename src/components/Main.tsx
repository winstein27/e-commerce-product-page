import React, { useState } from 'react';

import styles from './Main.module.css';
import IconButton from './UI/IconButton';

const imagesList = [
  '../../images/image-product-1.jpg',
  '../../images/image-product-2.jpg',
  '../../images/image-product-3.jpg',
  '../../images/image-product-4.jpg',
];

const Main = () => {
  const [imagePosition, setImagePosition] = useState(0);

  const previousImage = () => {
    setImagePosition((prevImagePosition) => {
      return prevImagePosition === 0
        ? imagesList.length - 1
        : prevImagePosition - 1;
    });
  };

  const nextImage = () => {
    setImagePosition((prevImagePosition) => {
      return prevImagePosition === imagesList.length - 1
        ? 0
        : prevImagePosition + 1;
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <img src={imagesList[imagePosition]} alt="Product" />
        <IconButton
          className={styles['previous-icon']}
          imgPath="../../images/icon-previous.svg"
          onClick={previousImage}
        />
        <IconButton
          className={styles['next-icon']}
          imgPath="../../images/icon-next.svg"
          onClick={nextImage}
        />
      </div>
    </main>
  );
};

export default Main;
