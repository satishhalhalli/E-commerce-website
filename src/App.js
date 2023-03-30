// App.js

import React from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import CartContext from './Store/cartContext';

function App() {
  return (
    <>
      <Header />
      <Products />
    </>
  );
}

export default App;
