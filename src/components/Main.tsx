import React from 'react';

import styles from './Main.module.css';
import IconButton from './UI/IconButton';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <img src="../../images/image-product-1.jpg" alt="Product" />
        <IconButton
          className={styles['previous-icon']}
          imgPath="../../images/icon-previous.svg"
        />
        <IconButton
          className={styles['next-icon']}
          imgPath="../../images/icon-next.svg"
        />
      </div>
    </main>
  );
};

export default Main;
