import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ProductPage from "./pages/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/Cookie/CookieBanner";
import "./App.css";

import {
  getCartFromStorage,
  saveCartToStorage,
} from "../src/utils/localStorage";

function App() {
  // Cart with localStorage
  const [cart, setCart] = useState(getCartFromStorage());

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = (product) => {
    console.log("ADDING TO CART:", product);

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // The product is already available - updating the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // The product is not available yet — add it with quantity = 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <>
      <Header
        cartCount={cart.reduce(
          (total, item) => total + (item.quantity || 1),
          0
        )}
        showOnlyFavorites={showOnlyFavorites}
        setShowOnlyFavorites={setShowOnlyFavorites}
      />

      <CookieBanner />

      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/product-page"
            element={
              <ProductPage
                showOnlyFavorites={showOnlyFavorites}
                setShowOnlyFavorites={setShowOnlyFavorites}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product-detail/:id"
            element={<ProductDetail cart={cart} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                deleteFromCart={deleteFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
