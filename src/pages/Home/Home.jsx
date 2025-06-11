import React from "react";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import s from "./Home.module.css";

const Home = () => {
  return (
    <section className={`${s.sectionHero}`}>
      <div className={`${s.heroContainer}`}>
        <div className={s.headlineContainer}>
          <h1 className={s.homeTitle}>
            Welcome to <span className={s.heroSpan}>MiniShop</span> — Your
            One-Stop Store for Beauty, Fragrances, Furniture & Groceries
          </h1>
          <p className={s.heroSubtitle}>
            This is a semester project created to showcase modern web
            development skills. Feel free to browse and enjoy!
          </p>
          <div className={s.heroNav}>
            <Link to="/product-page">
              <button className={s.heroBtn}>
                Shop now <BsShop className={s.heroIcon} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
