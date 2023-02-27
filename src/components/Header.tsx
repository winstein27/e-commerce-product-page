import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './Header.module.css';

import Backdrop from './UI/Backdrop';
import IconButton from './UI/IconButton';
import Cart from './Cart';

interface Props {
  cartProducts: number;
  clearCart: () => void;
}

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const cartIconClickHandler = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const menuStyles = styles.menu + (isMenuOpen ? ` ${styles.mobile}` : '');

  const navMenu = (
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
  );

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
        {isMenuOpen &&
          ReactDOM.createPortal(
            navMenu,
            document.getElementById('overlay-root') as HTMLElement
          )}

        <div className={styles.logo}>
          <img src="../../images/logo.svg" alt="Sneaker logo"></img>
        </div>

        <div className={styles.actions}>
          <IconButton
            imgPath="../../images/icon-cart.svg"
            label="Cart"
            onClick={cartIconClickHandler}
            badge={props.cartProducts}
            className={styles.badge}
          />

          {isCartOpen && (
            <Cart products={props.cartProducts} clearCart={props.clearCart} />
          )}

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
