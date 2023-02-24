import React from 'react';

import styles from './Main.module.css';

import PictureGallery from './main/PictureGallery';

const Main = () => {
  return (
    <main className={styles.main}>
      <PictureGallery />
    </main>
  );
};

export default Main;
