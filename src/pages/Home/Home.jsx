import React, { useState, useEffect } from "react";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import BestProposes from "../../components/BestProposes/BestProposes";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import s from "./Home.module.css";

import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "../../utils/localStorage";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState(getFavoritesFromStorage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        const filtered = data.products
          .filter((p) => p.category === "fragrances")
          .slice(0, 4);

        setProducts(filtered);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    saveFavoritesToStorage(favoriteIds);
  }, [favoriteIds]);

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <>
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
      <section>
        <FeatureSection />
      </section>
      <section>
        <BestProposes
          products={products}
          favoriteIds={favoriteIds}
          toggleFavorite={toggleFavorite}
        />
      </section>
    </>
  );
};

export default Home;
