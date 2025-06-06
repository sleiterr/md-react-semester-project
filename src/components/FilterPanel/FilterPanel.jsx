import React from "react";
import s from "./FilterPanel.module.css";

const FilterPanel = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  sortOption,
  setSortOption,
  showOnlyFavorites,
  setShowOnlyFavorites,
  resetFilters,
}) => {
  return (
    <div className={s.filterPanel}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={s.input}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={s.select}
      >
        <option>Alle kategorie</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className={s.select}
      >
        <option value="">Sort by</option>
        <option value="priceAsc">Price (Low to high)</option>
        <option value="priceDesc">Price (High to low)</option>
        <option value="alphaAsc">A–Z</option>
        <option value="alphaDesc">Z-A</option>
        <option value="ratingDesc">Rating</option>
      </select>

      <label className={s.checkBoxLabel}>
        <input
          type="checkbox"
          checked={showOnlyFavorites}
          onChange={(e) => setShowOnlyFavorites(e.target.value)}
        />
      </label>
      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
};

export default FilterPanel;
