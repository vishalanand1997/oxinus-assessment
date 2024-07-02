import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/MyContext";
import ScreenStyle from "./styles/Screen.module.css";
import YouTubeVideo from "../YouTubeVideo";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const [videoId, setVideoId] = useState("");
  const { favorites, moveToFavoriteMeal, removeFromFavoriteMeal } =
    useContext(MyContext);

  const fetchRandomMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((response) => {
        setRandomMeal(response.meals);
        const meal = response.meals[0];
        setVideoId(meal.strYoutube.split("=")[1]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => fetchRandomMeal(), []);
  return (
    <div className={ScreenStyle.randomContainer}>
      <h1 className={ScreenStyle.titlePage}>Random Meal</h1>
      {randomMeal.map((meal, index) => (
        <>
          <div key={`${index}`} className={ScreenStyle.randomMealContainer}>
            <div className={ScreenStyle.randomHeader}>
              <h3>{meal.strMeal}</h3>
              {favorites.some((item) => item.idMeal === meal.idMeal) ? (
                <FaHeart
                  className={ScreenStyle.like}
                  onClick={() => removeFromFavoriteMeal(meal)}
                />
              ) : (
                <FaRegHeart
                  className={ScreenStyle.unlike}
                  onClick={() => moveToFavoriteMeal(meal)}
                />
              )}
            </div>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={550}
              height={320}
            />
            <p>{meal.strInstructions}</p>
            <YouTubeVideo videoId={videoId} key={index} />
            <div className={ScreenStyle.ScreenStyleRatingContainer}></div>
          </div>
          <button
            onClick={fetchRandomMeal}
            className={ScreenStyle.randomGenerateBtn}
          >
            Generate
          </button>
        </>
      ))}
    </div>
  );
};

export default RandomMeal;
