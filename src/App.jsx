import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ProductPage from "./pages/ProductPage/ProductPage";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartPage from "./pages/CartPage/CartPage";
import "./App.css";

import {
  getCartFromStorage,
  saveCartToStorage,
} from "../src/utils/localStorage";

function App() {
  // Cart with localStorage
  const [cart, setCart] = useState(getCartFromStorage());

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = (product) => {
    console.log("ADDING TO CART:", product);

    setCart([...cart, product]);
  };

  return (
    <>
      <Header cartCount={cart.length} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product-detail/:id"
            element={<ProductDetail cart={cart} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
