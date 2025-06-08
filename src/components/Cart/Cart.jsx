import React from "react";
import { TbHttpDelete, TbMoodEmpty } from "react-icons/tb";
import { Link } from "react-router-dom";
import s from "./Cart.module.css";

const Cart = ({ cart, deleteFromCart }) => {
  return (
    <div className={s.cardBox}>
      <div className={s.cartCaption}>
        <h4 className={s.cartHeading}>Product</h4>
        <h4 className={s.cartSubtitle}>Price</h4>
      </div>
      {cart.length === 0 ? (
        <p className={s.cartMessage}>
          Your bag is empty. <TbMoodEmpty className={s.messageIcon} />
        </p>
      ) : (
        cart.map((item, index) => {
          const firstImage = item.images?.[0];
          return (
            <div className={s.cartList} key={`${item.id}-${index}`}>
              <div className={s.cartImage}>
                <Link to={`/product-detail/${item.id}`}>
                  <img
                    className={s.cartImg}
                    src={firstImage}
                    alt={item.title}
                  />
                </Link>
              </div>
              <div className={s.itemInfoWrapper}>
                <div className={s.cartInfo}>
                  <p className={s.cartBrand}>{item.brand}</p>
                  <p className={s.cartTitle}>{item.title}</p>
                </div>
                <div className={s.priceBox}>
                  <p className={s.cartPrice}>$ {item.price}</p>
                  <button
                    className={s.btnDelete}
                    onClick={() => deleteFromCart(item.id)}
                  >
                    <TbHttpDelete className={s.deleteIcon} />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
