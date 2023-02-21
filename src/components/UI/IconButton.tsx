import React from 'react';

import styles from './IconButton.module.css';

interface Props {
  className?: string;
  imgPath: string;
  label?: string;
  expanded?: boolean;
  controls?: string;
  onClick?: () => void;
}

const IconButton = (props: Props) => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      aria-label={props.label}
      aria-expanded={props.expanded}
      aria-controls={props.controls}
    >
      <img src={props.imgPath} alt="" />
    </button>
  );
};

export default IconButton;
