//Header.jsx

import React, { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { IoIosMenu } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

import s from "./Header.module.css";

const Header = ({ cartCount }) => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <>
      <div className={s.headerBanner}>
        <div className={s.deliveryInfo}>
          <p className={s.deliveryText}>
            <CiDeliveryTruck className={s.deliveryIcon} /> Free delivery on
            orders over $120
          </p>
        </div>
        <ul className={s.bannerList}>
          <li className={s.bannerItem}>
            <MdEmail className={s.bannerIcon} />
            <a href="mailto:minishop@gmail.com" className={s.bannerContact}>
              minishop@gmail.com
            </a>
          </li>
          <li className={s.bannerItem}>
            <FaPhoneAlt className={s.bannerIcon} />
            <a
              href="tel:+45 99 99 99 99"
              className={s.bannerContact}
              target="_blank"
              rel="noopener noreferrer"
            >
              +45 99 99 99 99
            </a>
          </li>
        </ul>
      </div>
      <header className={s.header}>
        <div className={s.burgerIcon} onClick={() => setmenuOpen(true)}>
          <IoIosMenu size={36} />
        </div>

        <BurgerMenu isOpen={menuOpen} onClose={() => setmenuOpen(false)} />

        <nav className={s.navBar}>
          <div className={s.logoNav}>
            <Link to="/">
              <p className={s.logo}>MiniShop</p>
            </Link>
          </div>
          <ul className={s.navList}>
            <li className={s.listItem}>
              <Link className={s.navLink} to="/">
                Home
              </Link>
            </li>

            <li className={s.listItem}>
              <Link className={s.navLink} to="/product-page">
                Shop
              </Link>
            </li>
            <li className={s.listItem}>
              <Link className={s.navLink} to="/contact">
                Contact
              </Link>
            </li>
            <li className={s.listItem}></li>
          </ul>
          <div className={s.cartBox}>
            <Link to="/cart" className={s.cartLink}>
              <HiOutlineShoppingBag className={s.cartItem} />
              {cartCount > 0 && (
                <span className={s.cartCount}>{cartCount}</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
