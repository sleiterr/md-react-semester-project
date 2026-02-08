import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./AboutProduct.module.css";

const AboutProduct = ({ productsId, addToCart }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productsId) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productsId}`);
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [productsId]);

  if (loading) return <p>Reading</p>;
  if (!products) return <p>No products was found</p>;

  return (
    <div className={s.aboutContainer}>
      <div className={s.aboutContent}>
        <div className={s.descAbout}>
          <div className={s.aboutheading}>
            <p className={s.aboutBrand}>Brand: {products.brand}</p>
            <h2 className={s.aboutTitle}>{products.title}</h2>
          </div>
          <div className={s.aboutText}>
            {/* <p className={s.aboutCat}>{products.tags[1]}</p> */}
            <p className={s.aboutProd}>{products.description}</p>
          </div>
          <div className={s.aboutBtn}>
            <p className={s.aboutPrice}>
              Best Price: <span className={s.spanPrice}>${products.price}</span>
            </p>
            <Link
              className={`${s.aboutView}`}
              to={`/product-detail/${products.id}`}
            >
              Learn more
            </Link>
            <button
              className={s.aboutAddBtn}
              onClick={() => addToCart(products)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className={s.imgContainer}>
          <img
            className={s.aboutImg}
            src={products.images[2]}
            alt={products.title}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
