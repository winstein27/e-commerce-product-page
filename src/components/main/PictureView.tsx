import React, { useState } from 'react';
import ReactDom from 'react-dom';

import styles from './PictureView.module.css';

import Backdrop from '../UI/Backdrop';
import IconButton from '../UI/IconButton';

interface Props {
  close: () => void;
  pictures: string[];
}

const PictureView = (props: Props) => {
  const [pictureIndex, setPictureIndex] = useState(0);

  const previousPicture = () => {
    setPictureIndex((prevPictureIndex) => {
      return prevPictureIndex === 0
        ? props.pictures.length - 1
        : prevPictureIndex - 1;
    });
  };

  const nextPicture = () => {
    setPictureIndex((prevPictureIndex) => {
      return prevPictureIndex === props.pictures.length - 1
        ? 0
        : prevPictureIndex + 1;
    });
  };

  const view = (
    <div className={styles.view}>
      <div className={styles.pictures}>
        <div className={styles.highlighted}>
          <img src={props.pictures[pictureIndex]} alt="" />
        </div>
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
        <div className={styles.list}>
          {props.pictures.map((picture, index) => (
            <div className={styles.min} key={index}>
              <img src={picture} alt="Product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Backdrop onClick={props.close} />
      {ReactDom.createPortal(
        view,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default PictureView;
