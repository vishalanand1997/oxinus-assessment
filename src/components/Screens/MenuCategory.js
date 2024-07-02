import React, { useContext, useEffect, useState } from "react";
import ScreenStyle from "./styles/Screen.module.css";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MyContext } from "../../context/MyContext";

const MenuCategory = () => {
  const [categoryMealsList, setCategoryMealsList] = useState([]);
  let { categoryName } = useParams();
  const { favorites, moveToFavoriteMeal, removeFromFavoriteMeal } =
    useContext(MyContext);

  const fetchCategoriesByName = () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )
      .then((res) => res.json())
      .then((response) => setCategoryMealsList(response.meals))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCategoriesByName();
  }, []);
  return (
    <div>
      <h1 className={ScreenStyle.titlePage}>{categoryName}</h1>
      <div className={ScreenStyle.menuContainer}>
        <ul className={ScreenStyle.itemContainerMenuMeals}>
          {categoryMealsList.map((list, index) => (
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
      </div>
    </div>
  );
};

export default MenuCategory;
