import React, { useState, useEffect } from "react";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import HerroImg from "../../assets/img-hero/gucci-blomm2.jpg";
import BestProposes from "../../components/BestProposes/BestProposes";
import AboutProduct from "../../components/AboutProduct/AboutProduct";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import s from "./Home.module.css";

import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "../../utils/localStorage";

const Home = ({ addToCart }) => {
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
            <div className={s.heroSubject}>
              <h1 className={s.homeTitle}>Step Into Bloom</h1>
              <p className={s.heroSubtitle}>
                Unveil Gucci's floral masterpiece — a perfect blend of elegance
                and bold style. Where every petal tells a story.
              </p>

              <div className={s.heroNav}>
                <Link to="/product-page">
                  <button className={s.heroBtn}>
                    Shop now <BsShop className={s.heroIcon} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="">
              <img className={s.heroImg} src={HerroImg} alt="Gucci Bloom" />
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
      <section className={s.aboutSection}>
        <div className="container">
          <AboutProduct productsId={8} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default Home;
