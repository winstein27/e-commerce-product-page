import React, { useState } from 'react';

import useScreen from '../../hooks/useScreen';

import styles from './PictureGallery.module.css';

import IconButton from '../UI/IconButton';
import PictureView from './PictureView';

const picturesList = [
  '../../images/image-product-1.jpg',
  '../../images/image-product-2.jpg',
  '../../images/image-product-3.jpg',
  '../../images/image-product-4.jpg',
];

const PictureGallery = () => {
  const [pictureIndex, setPictureIndex] = useState(0);
  const [pictureView, setPictureView] = useState(false);

  const { isMobileScreen } = useScreen();

  const previousPicture = () => {
    setPictureIndex((prevPictureIndex) => {
      return prevPictureIndex === 0
        ? picturesList.length - 1
        : prevPictureIndex - 1;
    });
  };

  const nextPicture = () => {
    setPictureIndex((prevPictureIndex) => {
      return prevPictureIndex === picturesList.length - 1
        ? 0
        : prevPictureIndex + 1;
    });
  };

  const closePictureView = () => {
    setPictureView(false);
  };

  return isMobileScreen ? (
    <div className={styles.gallery}>
      <img src={picturesList[pictureIndex]} alt="Product" />
      <IconButton
        className={styles['previous-icon']}
        imgPath="../../images/icon-previous.svg"
        onClick={previousPicture}
      />
      <IconButton
        className={styles['next-icon']}
        imgPath="../../images/icon-next.svg"
        onClick={nextPicture}
      />
    </div>
  ) : (
    <>
      {pictureView && (
        <PictureView close={closePictureView} pictures={picturesList} />
      )}
      <div className={styles.pictures}>
        <div
          className={styles.highlighted}
          onClick={() => setPictureView(true)}
        >
          <img src={picturesList[0]} alt="" />
        </div>
        <div className={styles.list}>
          {picturesList.map((picture, index) => (
            <div className={styles.min} key={index}>
              <img src={picture} alt="Product" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PictureGallery;
