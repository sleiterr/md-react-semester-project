import React, { useState } from "react";
import { GrValidate } from "react-icons/gr";
import { PiShieldWarning } from "react-icons/pi";
import s from "./DiscountCode.module.css";

const validCodes = {
  RABAT10: { type: "percent", value: 10 },
  FAST50: { type: "fixed", value: 50 },
  FRIFRAGT: { type: "Free Shipping", value: 0 },
};

const DiscountCode = ({ onApply }) => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleApply = () => {
    const trimed = code.trim().toUpperCase("");

    if (Object.prototype.hasOwnProperty.call(validCodes, trimed)) {
      const data = validCodes[trimed];
      setMessage(
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: "6px",
            fontSize: "16px",
            color: "#333",
            letterSpacing: "0.04em",
          }}
        >
          <GrValidate style={{ fontSize: "26px", color: "#333" }} />
          The code "{trimed}" is valid.
        </span>
      );
      onApply({ ...data, code: trimed });
    } else {
      setMessage(
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: "6px",
            fontSize: "16px",
            color: "#333",
            letterSpacing: "0.04em",
          }}
        >
          <PiShieldWarning style={{ fontSize: "26px", color: "#333" }} />
          Invalid discount code.
        </span>
      );
      onApply(null);
    }
  };

  return (
    <div className={s.promoBox}>
      {/* <h3>discount code</h3> */}
      <div className={s.inputBox}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="enter promocode"
          className={s.discountInput}
        />
        <button className={s.discountBtn} type="button" onClick={handleApply}>
          Apply
        </button>
      </div>
      <div className={s.messageBox}>
        {message && <p className={s.message}>{message}</p>}
      </div>
    </div>
  );
};

export default DiscountCode;
