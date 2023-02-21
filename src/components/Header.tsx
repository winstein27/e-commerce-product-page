import React, { useState } from 'react';

import styles from './Header.module.css';

import Backdrop from './UI/Backdrop';
import IconButton from './UI/IconButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuStyles = styles.menu + (isMenuOpen ? ` ${styles.mobile}` : '');

  return (
    <>
      <header>
        <IconButton
          imgPath="../../images/icon-menu.svg"
          label="Open menu"
          controls="menu"
          expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        />

        {isMenuOpen && <Backdrop onClick={closeMenu} />}
        <nav id="menu" className={menuStyles}>
          <IconButton
            imgPath="../../images/icon-close.svg"
            label="Close menu"
            controls="menu"
            expanded={isMenuOpen}
            onClick={closeMenu}
          />
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className={styles.logo}>
          <img src="../../images/logo.svg" alt="Sneaker logo"></img>
        </div>

        <div className={styles.actions}>
          <IconButton imgPath="../../images/icon-cart.svg" label="Cart" />

          <img
            src="../../images/image-avatar.png"
            alt="User avatar"
            width="30px"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
