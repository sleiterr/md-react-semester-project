import React from "react";
import s from "./ProductList.module.css";
import { Link } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const ProductList = ({ products, favoriteIds, toggleFavorite }) => {
  if (products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div className={s.productContainer}>
      <ul className={s.productList}>
        {products.map((prod) => {
          const isFavorite = favoriteIds.includes(prod.id);
          return (
            <li className={s.listItem} key={prod.id}>
              <div className={s.likeBtn}>
                <button
                  onClick={() => toggleFavorite(prod.id)}
                  className={`${s.favoriteButt} ${
                    isFavorite ? s.favorited : ""
                  }`}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                >
                  {isFavorite ? <FcLike /> : <FcLikePlaceholder />}
                </button>
              </div>
              <Link to={`/product-detail/${prod.id}`}>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  className={s.productImage}
                />
                <div className={s.productsContent}>
                  <div className={s.productDesc}>
                    <div className={s.cardSubject}>
                      <h3 className={s.productTitle}>{prod.title}</h3>
                      <p className={s.ratingProducts}>{prod.rating}</p>
                    </div>
                    <div className={s.katBox}>
                      <p className={s.kategory}>{prod.category}</p>
                    </div>
                  </div>
                  <div className={s.priceBox}>
                    <p className={s.priceProducts}>${prod.price}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
