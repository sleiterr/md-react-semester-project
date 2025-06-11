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
  // showOnlyFavorites,
  // setShowOnlyFavorites,
  resetFilters,
}) => {
  return (
    <div className={s.filterPanel}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={s.inputFilter}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={s.selectFilter}
      >
        <option value="all">Alle kategorie</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className={s.sortFilter}
      >
        <option value="">Sort by</option>
        <option value="priceAsc">Price (Low to high)</option>
        <option value="priceDesc">Price (High to low)</option>
        <option value="alphaAsc">A–Z</option>
        <option value="alphaDesc">Z-A</option>
        <option value="ratingDesc">Rating</option>
      </select>
      
      <button className={s.filterBtn} onClick={resetFilters}>
        Reset filters
      </button>

      {/* <label className={s.checkBoxLabel}>
        <input
          type="checkbox"
          checked={showOnlyFavorites}
          onChange={(e) => setShowOnlyFavorites(e.target.checked)}
          className={s.checked}
        />
        <span className={s.checkBoxText }>Show favorites only</span>
      </label> */}
    </div>
  );
};

export default FilterPanel;
