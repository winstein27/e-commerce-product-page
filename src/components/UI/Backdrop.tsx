import React from 'react';

import styles from './Backdrop.module.css';

interface Props {
  onClick: () => void;
}

const Backdrop = (props: Props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

export default Backdrop;
