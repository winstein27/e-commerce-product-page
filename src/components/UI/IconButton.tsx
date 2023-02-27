import React from 'react';

import styles from './IconButton.module.css';

interface Props {
  className?: string;
  imgPath: string;
  label?: string;
  expanded?: boolean;
  controls?: string;
  onClick?: () => void;
  badge?: number;
}

const IconButton = (props: Props) => {
  const showBadge = props.badge ? props.badge > 0 : undefined;

  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      aria-label={props.label}
      aria-expanded={props.expanded}
      aria-controls={props.controls}
    >
      <img src={props.imgPath} alt="" />
      {showBadge && <span className={styles.badge}>{props.badge}</span>}
    </button>
  );
};

export default IconButton;
