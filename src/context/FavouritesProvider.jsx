import { createContext, useContext, useEffect, useState } from "react";

export const FavouritesContext = createContext(null);
export const useFavourites = () => useContext(FavouritesContext);


const FavouritesProvider = ({ children }) => {
  const favoutir = localStorage.getItem("favourites-provider");

  const [favourites, setFavourites] = useState(JSON.parse(favoutir) || []);
  function addFavourite(product) {
    setFavourites([...favourites, product]);
  }
  function deleteFavourites(id) {
    setFavourites(favourites.filter((item) => item.id !== id));
  }

  function checkFavourite(id) {
    return favourites.some((item) => item.id === id);
  }
  useEffect(() => {
    localStorage.setItem("favourites-provider", JSON.stringify(favourites));
  }, [favourites]);
  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, deleteFavourites, checkFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
