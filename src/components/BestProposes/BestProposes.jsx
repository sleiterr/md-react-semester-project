// BestProposes.jsx
import React from "react";
import ProductList from "../ProductList/ProductList";
import s from "./BestProposes.module.css";

const BestProposes = ({ products, favoriteIds, toggleFavorite }) => {
  return (
    <div className="container">
      <div className={s.proposesContainer}>
        <div className={s.propSubject}>
          <h2 className={s.propTitle}>Best Proposes</h2>
        </div>
        <ProductList
          products={products}
          favoriteIds={favoriteIds}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default BestProposes;
