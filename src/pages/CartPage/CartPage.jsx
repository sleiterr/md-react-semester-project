//CartPage.jsx

import React from "react";
import Cart from "../../components/Cart/Cart";
import Summary from "../../components/Cart/Summary";

import s from "./CartPage.module.css";

const CartPage = ({
  cart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <section>
      <div className="container">
        <div className={s.cartContainer}>
          <Cart
            cart={cart}
            deleteFromCart={deleteFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <Summary cart={cart} />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
