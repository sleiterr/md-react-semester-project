import React from "react";
import s from "./ProductList.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const ProductList = ({ products, favoriteIds, toggleFavorite }) => {
  if (products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <ul className={s.productList}>
      {products.map((prod) => {
        const isFavorite = favoriteIds.includes(prod.id);
        return (
          <li key={prod.id}>
            <img
              src={prod.thumbnail}
              alt={prod.title}
              className={s.productImage}
            />
            <div className={s.productsContent}>
              <div className={s.productDesc}>
                <h3 className={s.productTitle}>{prod.title}</h3>
                <p className={s.kategory}>Kategory:{prod.category}</p>
              </div>
              <div className={s.proceBox}>
                <p className={s.priceProducts}>${prod.price}</p>
              </div>
              <button
                onClick={() => toggleFavorite(prod.id)}
                className={`${s.favoriteButt} ${isFavorite ? s.favorited : ""}`}
                aria-label={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
              >
                {isFavorite ? <FcLike /> : <FcLikePlaceholder />}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
