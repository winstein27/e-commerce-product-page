import React, { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [cartProducts, setCartProducts] = useState(0);

  const addProductsToCart = (items: number) => {
    setCartProducts((prev) => prev + items);
  };

  const clearCart = () => {
    setCartProducts(0);
  };

  return (
    <>
      <Header cartProducts={cartProducts} clearCart={clearCart} />
      <Main addProductsToCart={addProductsToCart} />
    </>
  );
}

export default App;
