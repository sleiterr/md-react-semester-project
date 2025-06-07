import React from "react";
import s from "./Cart.module.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <div className={s.cardBox}>
        {cart.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          cart.map((item, index) => {
            const firstImage = item.images?.[0];
            return (
              <section key={`${item.id}-${index}`}>
                <div className={s.cartItem}>
                  <img src={firstImage} alt={item.title} />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
