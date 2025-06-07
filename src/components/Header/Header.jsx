//Header.jsx

import React, { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { IoIosMenu } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

import s from "./Header.module.css";

const Header = ({ cartCount }) => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.burgerIcon} onClick={() => setmenuOpen(true)}>
        <IoIosMenu size={36} />
      </div>

      <BurgerMenu isOpen={menuOpen} onClose={() => setmenuOpen(false)} />

      <nav className={s.navBar}>
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
            {cartCount > 0 && <span className={s.cartCount}>{cartCount}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
