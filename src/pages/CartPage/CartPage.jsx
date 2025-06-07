import React from "react";
import Cart from "../../components/Cart/Cart";

import s from "./CartPage.module.css";

const CartPage = ({ cart }) => {
  return (
    <section>
      <div className="container">
        <div className={s.cartContainer}>
          <Cart cart={cart} />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
