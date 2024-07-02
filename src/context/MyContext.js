import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const moveToFavoriteMeal = (item) => {
    setFavorites([...favorites, item]);
  };
  const removeFromFavoriteMeal = (item) => {
    const filteredMealList = favorites.filter(
      (list, index) => list.idMeal !== item.idMeal
    );
    setFavorites(filteredMealList);
  };
  return (
    <MyContext.Provider
      value={{ favorites, moveToFavoriteMeal, removeFromFavoriteMeal }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
