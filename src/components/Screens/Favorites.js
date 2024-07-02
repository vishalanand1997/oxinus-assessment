import React, { useContext } from "react";
import ScreenStyle from "./styles/Screen.module.css";
import { MyContext } from "../../context/MyContext";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
  const { favorites, moveToFavoriteMeal, removeFromFavoriteMeal } =
    useContext(MyContext);

  return (
    <div>
      <h1 className={ScreenStyle.titlePage}>My Favorites</h1>
      <div className={ScreenStyle.menuContainer}>
        {favorites.length > 0 ? (
          <ul className={ScreenStyle.itemContainerMenuMeals}>
            {favorites.map((list, index) => (
              <>
                <li key={`${list.idMeal}-${index}`}>
                  <img
                    src={list.strMealThumb}
                    alt={list.strMeal}
                    width={"50"}
                    height={"50"}
                  />
                  {list.strMeal}
                  {favorites.some((item) => item.idMeal === list.idMeal) ? (
                    <FaHeart
                      className={ScreenStyle.like}
                      onClick={() => removeFromFavoriteMeal(list)}
                    />
                  ) : (
                    <FaRegHeart
                      className={ScreenStyle.unlike}
                      onClick={() => moveToFavoriteMeal(list)}
                    />
                  )}
                </li>
              </>
            ))}
          </ul>
        ) : (
          <h3>No Favorites available</h3>
        )}
      </div>
    </div>
  );
};

export default Favorites;
