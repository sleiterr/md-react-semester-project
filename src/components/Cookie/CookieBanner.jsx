import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import s from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const conset = Cookies.get("cookieConset");
    if (!conset) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConset", "accepted", { expires: 1 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set("cookieConset", "declined", { expires: 1 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={s.banner}>
      <p className={s.textBanner}>
        We use cookies to improve your experience. You can accept or decline.
      </p>
      <div className={s.btns}>
        <button className={s.accept} onClick={handleAccept}>
          Accepted
        </button>
        <button className={s.decline} onClick={handleDecline}>
          Declinde
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
