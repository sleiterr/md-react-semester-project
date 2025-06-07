import React from "react";
import Cart from "../../components/Cart/Cart";

const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Yur shoping cart</h2>
      <Cart cart={cart} />
    </div>
  );
};

export default CartPage;
