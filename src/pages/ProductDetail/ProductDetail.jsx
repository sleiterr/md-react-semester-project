import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import s from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json("");
        setProduct(data);
      } catch (error) {
        setError("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <p>Product not found ☹️</p>;

  return (
    <section className={s.productSection}>
      <div className={`${s.productContainer} container`}>
        <div className="">
          <h2 className={s.productTitle}>ProductDetail</h2>
        </div>
              <div>
                  <img src={ } alt="" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
