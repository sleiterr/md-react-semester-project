import React from "react";
import s from "./Cart.module.css";

const Cart = ({ cart }) => {
  return (
    <div className={s.cardBox}>
      {cart.length === 0 ? (
        <p className={s.cartMessage}>Your shopping cart is empty.</p>
      ) : (
        cart.map((item, index) => {
          const firstImage = item.images?.[0];
          return (
            <div key={`${item.id}-${index}`}>
              <div className={s.cartItem}>
                <img className={s.cartImg } src={firstImage} alt={item.title} />
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
