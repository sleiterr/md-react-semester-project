import React from "react";
import Cart from "../../components/Cart/Cart";
import CartSummary from "../../components/Cart/CartSummary";

import s from "./CartPage.module.css";

const CartPage = ({ cart, deleteFromCart }) => {
  return (
    <section>
      <div className="container">
        <div className={s.cartContainer}>
          <Cart cart={cart} deleteFromCart={deleteFromCart} />
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
