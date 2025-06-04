import React, { useState, useEffect } from "react";

import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "../../utils/localStorage";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [favoriteIds, setFavoriteIds] = useState(false);
  //Favorite with localStorage
  const [favoriteId, setFavoriteId] = useState("getFavoritesFromStorage");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json("");
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>ProductPage</h1>
    </div>
  );
};

export default ProductPage;
