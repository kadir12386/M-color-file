export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));
export const updateStoreMovies = (updateMovies) =>
  localStorage.setItem("movies", JSON.stringify(updateMovies));
