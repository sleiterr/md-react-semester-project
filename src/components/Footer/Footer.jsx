import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerContent}>
        <h4 className={s.footerTitle}>MiniShop</h4>
        <ul className={s.footerList}>
          <li>
            <FaFacebook className={s.footerIcon}/>
          </li>
          <li>
            <FaYoutube className={s.footerIcon}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
