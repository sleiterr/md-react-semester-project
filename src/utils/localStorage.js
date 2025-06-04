const FAVORITES_KEY = "favoriteProductsIds";

export function getFavoritesFromStorage() {
  try {
    const fav = localStorage.getItem(FAVORITES_KEY);
    return fav ? JSON.parse(fav) : [];
  } catch (e) {
    console.error("Could not fetch favorites from localStorage", e);
    return [];
  }
}

export function saveFavoritesToStorage(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error("Could not save favorites to localStorage", e);
  }
}
