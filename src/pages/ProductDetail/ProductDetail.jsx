import React, { useState, useEffect } from "react";
import { IoCheckmark } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import { useParams, Link } from "react-router-dom";
import s from "./ProductDetail.module.css";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const stars = Array(5).fill(0);

  const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
  };

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <p>Product not found ☹️</p>;

  // const isInCart = cart.some((item) => item.id === product.id);

  return (
    <section className={s.productSection}>
      <div className="container">
        <div className={s.productLink}>
          <ul className={s.linkList}>
            <li className={s.productNav}>
              <Link className={`${s.productNavLink} ${s.iconLink}`} to="/">
                Home <IoIosArrowRoundForward className={s.iconArrow} />
              </Link>
            </li>
            <li className={s.productNav}>
              <Link className={s.productNavLink} to="/product-page">
                Product page
              </Link>
            </li>
          </ul>
        </div>
        <div className={s.productContainer}>
          <div>
            <img
              className={s.detailImg}
              src={product.images?.[2] || product.images?.[0]}
              alt={product.title}
            />
          </div>
          <div className={s.descDetail}>
            <div>
              <p className={s.brand}>{product.brand}</p>
            </div>
            <div className={s.subjectDet}>
              <h4 className={s.descTitle}>{product.title}</h4>
              <p className={s.sku}>{product.sku}</p>
            </div>
            <div className={s.priceDet}>
              <p className={s.price}>$ {product.price}</p>
              <p className={s.status}>
                {product.availabilityStatus}
                <IoCheckmark className={s.checkMark} />
              </p>
            </div>
            <div className={s.rating}>
              {stars.map((_, index) => (
                <IoIosStarOutline
                  key={index}
                  size={36}
                  color={product.rating > index ? colors.orange : colors.grey}
                />
              ))}

              {/* <p className={s.rating}>{product.rating}</p> */}
            </div>
            <div className={s.descDet}>
              <p className={s.description}>{product.description}</p>
            </div>
            <div className={s.detailBtn}>
              <button
                onClick={() => addToCart(product)}
                className={s.addButton}
              >
                Add To Cart
                <HiOutlineShoppingBag className={s.productIcon} />
              </button>
            </div>
            <div className={s.descCat}>
              <p className={s.category}>
                <span className={s.categoryItem}>Category:</span>{" "}
                {product.tags[1]}
              </p>
            </div>

            <div className={s.shippingInfo}>
              <p className={s.shippingDesc}>
                <LiaShippingFastSolid className={s.shippingIcon} />
                {product.shippingInformation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
