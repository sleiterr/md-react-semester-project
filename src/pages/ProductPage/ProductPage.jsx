import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import ProductDetail from "../ProductDetail/ProductDetail";

import s from "./ProductPage.module.css";

import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "../../utils/localStorage";

/* { cart, addToCart } */
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  //Favorite with localStorage
  const [favoriteIds, setFavoriteId] = useState(getFavoritesFromStorage);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    saveFavoritesToStorage(favoriteIds);
  }, [favoriteIds]);

  const categories = [...new Set(products.map((p) => p.category))];

  function resetFilters() {
    setSearchTerm("");
    setSelectedCategory("");
    setSortOption("");
    setShowOnlyFavorites("");
    setCurrentPage(1);
  }

  function toggleFavorite(id) {
    setFavoriteId((favIds) =>
      favIds.includes(id) ? favIds.filter((fid) => fid !== id) : [...favIds, id]
    );
  }

  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) => (selectedCategory ? p.category === selectedCategory : true))
    .filter((p) => (showOnlyFavorites ? favoriteIds.includes(p.id) : true))
    .sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "alphaAsc":
          return a.title.localeCompare(b.title);
        case "alphaDesc":
          return b.title.localeCompare(a.title);
        case "ratingDesc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pageProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredProducts, currentPage, totalPages]);

  return (
    <section>
      <div className={`${s.productsContainer}`}>
        <div>
          <h2>Shop</h2>
        </div>

        <FilterPanel
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          sortOption={sortOption}
          setSortOption={setSortOption}
          showOnlyFavorites={showOnlyFavorites}
          setShowOnlyFavorites={setShowOnlyFavorites}
          resetFilters={resetFilters}
        />

        {loading && <p>Loader produkter...</p>}
        {error && <p className={s.error}>Fejl: {error}</p>}
        {!loading && !error && (
          <>
            <ProductList
              products={pageProducts}
              favoriteIds={favoriteIds}
              toggleFavorite={toggleFavorite}
            />

            <Pagination
              currentPage={currentPage}
              totalPges={totalPages}
              setCurrentPage={setCurrentPage}
            />

            {/* <ProductDetail cart={cart} addToCart={addToCart} /> */}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
