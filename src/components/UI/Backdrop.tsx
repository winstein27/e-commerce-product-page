import React from 'react';
import ReactDom from 'react-dom';

import styles from './Backdrop.module.css';

interface Props {
  onClick: () => void;
}

const Backdrop = (props: Props) => {
  const backdrop = (
    <div className={styles.backdrop} onClick={props.onClick}></div>
  );

  return ReactDom.createPortal(
    backdrop,
    document.getElementById('backdrop-root') as HTMLElement
  );
};

export default Backdrop;
