// BestProposes.jsx
import React from "react";
import ProductList from "../ProductList/ProductList";

const BestProposes = ({ products, favoriteIds, toggleFavorite }) => {
  return (
    <div>
      <ProductList
        products={products}
        favoriteIds={favoriteIds}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default BestProposes;
