import React, { useState } from "react";
import DiscountCode from "../DiscountCode/DiscountCode";
import { MdPayment } from "react-icons/md";
import MasterCardLog from "../../assets/paymentLogo/MasterCard.svg";
import VisaLog from "../../assets/paymentLogo/VISA.svg";
import s from "./Cart.module.css";

const CartSummary = ({ cart }) => {
  const [discount, setDiscount] = useState(null);

  const shippingFree = 50;

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.quantity || 1) * item.price,
    0
  );

  const calculateTotal = () => {
    if (cart.length === 0) return 0;

    let total = totalPrice + shippingFree;

    if (discount) {
      if (discount.type === "percent") {
        total -= (totalPrice * discount.value) / 100;
      } else if (discount.type === "fixed") {
        total -= discount.value;
      } else if (discount.type === "Free Shipping") {
        total -= shippingFree;
      }
    }

    return total > 0 ? total : 0;
  };

  const onSubmit = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert(`Thank you for your order, Total: ${calculateTotal().toFixed(2)} $`);
  };

  return (
    <div className={s.summaryBox}>
      <h4 className={s.summaryTitle}>Summary</h4>

      <DiscountCode onApply={setDiscount} />

      <div className={s.summaryWrapper}>
        <div className={s.sumList}>
          <p className={s.price}>
            <span className={s.priceItem}>Price:</span> ${totalPrice.toFixed(2)}
          </p>
          <p className={s.shipping}>
            <span className={s.shipItem}> Shipping:</span>
            {discount?.type === "Free Shipping"
              ? "$0.00"
              : `$${shippingFree.toFixed(2)}`}
          </p>
          {discount && discount.type !== "Free Shipping" && (
            <div style={{ height: "20px", width: "100%" }}>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "600",
                  fontSize: "22px",
                  color: "#333",
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    letterSpacing: "0.06em",
                  }}
                >
                  Discount:
                </span>
                {discount.type === "percent"
                  ? `${discount.value}%`
                  : `$${discount.value}`}
              </p>
            </div>
          )}
          <div className={s.totalPrice}>
            <p className={s.total}>
              <span className={s.totalItem}>Total:</span> $
              {calculateTotal().toFixed(2)}
            </p>
          </div>
        </div>
        <div className={s.orderActions}>
          <div className={s.btnBox}>
            <button className={s.confirmBtn} onClick={onSubmit}>
              Confirm Order <MdPayment className={s.paymentIcon} />
            </button>
          </div>
          <div className={s.iconBox}>
            <p className={s.iconTitle}>We accept</p>
            <div className={s.paymentLogo}>
              <img
                src={MasterCardLog}
                alt="master-cart"
                className={s.masterIcon}
              />
              <img src={VisaLog} alt="master-cart" className={s.visaIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
