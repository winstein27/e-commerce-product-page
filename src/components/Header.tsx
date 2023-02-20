import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <button
        className={styles['icon-button']}
        aria-label="Menu"
        aria-expanded="false"
        aria-controls="menu"
      >
        <img src="../../images/icon-menu.svg" alt="" />
      </button>

      <nav id="menu" className={styles.menu}>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className={styles.logo}>
        <img src="../../images/logo.svg" alt="Sneaker logo"></img>
      </div>

      <div className={styles.actions}>
        <button
          className={styles['icon-button']}
          aria-label="Cart"
          aria-expanded="false"
        >
          <img src="../../images/icon-cart.svg" alt="" />
        </button>
        <img
          src="../../images/image-avatar.png"
          alt="User avatar"
          width="30px"
        />
      </div>
    </header>
  );
};

export default Header;
